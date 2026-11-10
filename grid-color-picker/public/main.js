const drop = document.getElementById("drop");
const container = document.getElementById("container");
const image = document.getElementById("image");
const overlay = document.getElementById("overlay");
const status = document.getElementById("status");

const ctx = overlay.getContext("2d");

// Separate canvas used only for reading pixels.
const pixels = document.createElement("canvas");
const pixelCtx = pixels.getContext("2d", {
  willReadFrequently: true,
});

let state = "first";
let p1 = null;
let p2 = null;

let subdivisionsY = 1;
let subdivisionsX = 1;

let mouse = null;

// ------------------------------------------------------------
// Image loading
// ------------------------------------------------------------

function loadImage(src) {
  image.crossOrigin = "anonymous";
  image.onload = () => {
    drop.style.display = "none";
    container.style.display = "block";

    overlay.width = image.naturalWidth;
    overlay.height = image.naturalHeight;

    pixels.width = image.naturalWidth;
    pixels.height = image.naturalHeight;

    pixelCtx.drawImage(image, 0, 0);

    updateStatus();
  };

  image.src = src;
}

drop.addEventListener("dragover", (e) => {
  e.preventDefault();
});

drop.addEventListener("drop", async (e) => {
  e.preventDefault();

  // File from Explorer / file manager
  const file = e.dataTransfer.files[0];

  if (file) {
    if (!file.type.startsWith("image/")) return;

    loadImage(URL.createObjectURL(file));
    return;
  }

  // Image dragged from another webpage
  const uri = e.dataTransfer.getData("text/uri-list");

  if (uri) {
    const url = uri.split("\n")[0].trim();

    if (url) {
      loadImage(url);
    }
  }
});

document.addEventListener("paste", async (e) => {
  const items = [...e.clipboardData.items];

  // Actual image copied to clipboard
  const imageItem = items.find((item) => item.type.startsWith("image/"));

  if (imageItem) {
    const blob = imageItem.getAsFile();

    if (blob) {
      loadImage(URL.createObjectURL(blob));
      return;
    }
  }

  // URL copied to clipboard
  const text = e.clipboardData.getData("text/plain");

  if (text && /^https?:\/\/\S+$/i.test(text.trim())) {
    loadImage(text.trim());
  }
});

// ------------------------------------------------------------
// Coordinate conversion
// ------------------------------------------------------------

function imagePosition(e) {
  const rect = image.getBoundingClientRect();

  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

// ------------------------------------------------------------
// Mouse
// ------------------------------------------------------------

container.addEventListener("mousemove", (e) => {
  mouse = imagePosition(e);
  draw();
});

container.addEventListener("click", (e) => {
  if (!image.src) return;

  const p = imagePosition(e);

  // Ignore clicks outside the image.
  if (
    p.x < 0 ||
    p.y < 0 ||
    p.x > image.naturalWidth ||
    p.y > image.naturalHeight
  )
    return;

  if (state === "first") {
    p1 = p;
    state = "second";
  } else if (state === "second") {
    p2 = p;

    // Normalize the corners so either drag direction works.
    normalizePoints();

    state = "subdivisionsY";
  } else if (state === "subdivisionsY") {
    state = "subdivisionsX";
  } else if (state === "subdivisionsX") {
    state = "done";

    const grid = createGrid();
    createInterpolatedImage(grid);
  }

  updateStatus();
  draw();
});

async function createInterpolatedImage(grid) {
  const width = Math.round(p2.x - p1.x);
  const height = Math.round(p2.y - p1.y);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  const output = ctx.createImageData(width, height);
  const data = output.data;

  const rows = grid.length;
  const cols = grid[0].length;

  for (let y = 0; y < height; y++) {
    const gy = (y / (height - 1)) * (rows - 1);
    const y0 = Math.floor(gy);
    const y1 = Math.min(y0 + 1, rows - 1);
    const fy = gy - y0;

    for (let x = 0; x < width; x++) {
      const gx = (x / (width - 1)) * (cols - 1);
      const x0 = Math.floor(gx);
      const x1 = Math.min(x0 + 1, cols - 1);
      const fx = gx - x0;

      // Four surrounding grid vertices
      const c00 = grid[y0][x0];
      const c10 = grid[y0][x1];
      const c01 = grid[y1][x0];
      const c11 = grid[y1][x1];

      const i = (y * width + x) * 4;

      // Bilinear interpolation
      for (let channel = 0; channel < 4; channel++) {
        const top = c00[channel] * (1 - fx) + c10[channel] * fx;

        const bottom = c01[channel] * (1 - fx) + c11[channel] * fx;

        data[i + channel] = Math.round(top * (1 - fy) + bottom * fy);
      }
    }
  }

  ctx.putImageData(output, 0, 0);

  // Download PNG
  await saveGridImage(canvas, grid);

  console.log("Interpolated image created:", canvas);
  resetSelection();
  return canvas;
}
function resetSelection() {
    p1 = null;
    p2 = null;
    mouse = null;

    subdivisionsX = 1;
    subdivisionsY = 1;

    state = "first";

    ctx.clearRect(0, 0, overlay.width, overlay.height);
    updateStatus();
}

async function saveGridImage(canvas, grid) {
    const image = new Image();

    image.src = canvas.toDataURL("image/png");

    await image.decode();

    const encoded = steg.encode(JSON.stringify(grid), image);

    const a = document.createElement("a");
    a.href = encoded;
    a.download = "interpolated.png";
    a.click();
}

// ------------------------------------------------------------
// Scroll = change subdivisions
// ------------------------------------------------------------

container.addEventListener(
  "wheel",
  (e) => {
    if (
      state !== "second" &&
      state !== "subdivisionsY" &&
      state !== "subdivisionsX"
    )
      return;

    e.preventDefault();

    const direction = e.deltaY > 0 ? -1 : 1;

    if (e.ctrlKey) {
      subdivisionsY = Math.max(1, subdivisionsY + direction);
    } else {
      subdivisionsX = Math.max(1, subdivisionsX + direction);
    }

    updateStatus();
    draw();
  },
  { passive: false }
);

// ------------------------------------------------------------
// Normalize corners
// ------------------------------------------------------------

function normalizePoints() {
  const x1 = Math.min(p1.x, p2.x);
  const x2 = Math.max(p1.x, p2.x);
  const y1 = Math.min(p1.y, p2.y);
  const y2 = Math.max(p1.y, p2.y);

  p1 = { x: x1, y: y1 };
  p2 = { x: x2, y: y2 };
}

// ------------------------------------------------------------
// Drawing
// ------------------------------------------------------------

function draw() {
  ctx.clearRect(0, 0, overlay.width, overlay.height);

  if (!p1) return;

  // First point
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(p1.x, p1.y, 5, 0, Math.PI * 2);
  ctx.fill();

  if (!p2) {
    if (!mouse) return;

    const x1 = Math.min(p1.x, mouse.x);
    const y1 = Math.min(p1.y, mouse.y);
    const x2 = Math.max(p1.x, mouse.x);
    const y2 = Math.max(p1.y, mouse.y);

    const width = x2 - x1;
    const height = y2 - y1;

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.strokeRect(x1, y1, width, height);

    // Preview grid
    ctx.strokeStyle = "rgba(255, 255, 0, 0.8)";
    ctx.lineWidth = 1;

    // X subdivisions
    for (let x = 1; x < subdivisionsX; x++) {
      const xx = x1 + (width * x) / subdivisionsX;

      ctx.beginPath();
      ctx.moveTo(xx, y1);
      ctx.lineTo(xx, y2);
      ctx.stroke();
    }

    // Y subdivisions
    for (let y = 1; y < subdivisionsY; y++) {
      const yy = y1 + (height * y) / subdivisionsY;

      ctx.beginPath();
      ctx.moveTo(x1, yy);
      ctx.lineTo(x2, yy);
      ctx.stroke();
    }

    return;
  }

  // Rectangle
  const width = p2.x - p1.x;
  const height = p2.y - p1.y;

  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.strokeRect(p1.x, p1.y, width, height);

  // Preview grid
  if (
    state === "subdivisionsY" ||
    state === "subdivisionsX" ||
    state === "done"
  ) {
    ctx.strokeStyle = "rgba(255,255,0,.8)";
    ctx.lineWidth = 1;

    for (let y = 1; y < subdivisionsY; y++) {
      const yy = p1.y + (height * y) / subdivisionsY;

      ctx.beginPath();
      ctx.moveTo(p1.x, yy);
      ctx.lineTo(p2.x, yy);
      ctx.stroke();
    }

    for (let x = 1; x < subdivisionsX; x++) {
      const xx = p1.x + (width * x) / subdivisionsX;

      ctx.beginPath();
      ctx.moveTo(xx, p1.y);
      ctx.lineTo(xx, p2.y);
      ctx.stroke();
    }

    // Draw vertices
    ctx.fillStyle = "white";

    for (let y = 0; y <= subdivisionsY; y++) {
      for (let x = 0; x <= subdivisionsX; x++) {
        const xx = p1.x + (width * x) / subdivisionsX;

        const yy = p1.y + (height * y) / subdivisionsY;

        ctx.fillRect(xx - 2, yy - 2, 4, 4);
      }
    }
  }
}

// ------------------------------------------------------------
// Status
// ------------------------------------------------------------

function updateStatus() {
  let text = "";

  switch (state) {
    case "first":
      text = "Click the first corner";
      break;

    case "second":
      text = "Click the opposite corner";
      break;

    case "subdivisionsY":
      text = `Scroll: Y subdivisions = ${subdivisionsY}\n` + `Click to confirm`;
      break;

    case "subdivisionsX":
      text = `Scroll: X subdivisions = ${subdivisionsX}\n` + `Click to confirm`;
      break;

    case "done":
      text = `Done\n` + `X: ${subdivisionsX}\n` + `Y: ${subdivisionsY}`;
      break;
  }

  status.textContent = text;
}

// ------------------------------------------------------------
// Sample image at every grid vertex
// ------------------------------------------------------------

function createGrid() {
  const width = p2.x - p1.x;
  const height = p2.y - p1.y;

  const grid = [];

  for (let y = 0; y <= subdivisionsY; y++) {
    const row = [];

    const py = p1.y + (height * y) / subdivisionsY;

    for (let x = 0; x <= subdivisionsX; x++) {
      const px = p1.x + (width * x) / subdivisionsX;

      /*
       * Canvas coordinates are integer pixel coordinates.
       *
       * Clamp because a vertex can land exactly on the
       * right/bottom edge of the image.
       */
      const ix = Math.min(image.naturalWidth - 1, Math.max(0, Math.round(px)));

      const iy = Math.min(image.naturalHeight - 1, Math.max(0, Math.round(py)));

      const rgba = pixelCtx.getImageData(ix, iy, 1, 1).data;

      row.push([rgba[0], rgba[1], rgba[2], rgba[3]]);
    }

    grid.push(row);
  }

  console.log("Grid:", grid);
  console.log(`Dimensions: ${subdivisionsX + 1} × ${subdivisionsY + 1}`);

  return grid;
}
