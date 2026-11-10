console.log(new Date());
// document.addEventListener("keydown", (e) => {
//     if (e.key.toLowerCase() === "o") {
//         console.log("Seeting table");
//         localStorage.setItem(
//             "table",
//             JSON.stringify([
//                 ["アルベド t-most", "albedo t-most", ""],
//                 ["初音 ミク t-most", "Hatsune Miku t-most", ""],
//                 ["", "", ""],
//                 ["", "", ""],
//                 [
//                     "アストルフォ",
//                     "Astolfo",
//                     "https://myfigurecollection.net/entry/81766",
//                 ],
//                 [
//                     "アルトリア・ペンドラゴン",
//                     "Altria Pendragon",
//                     "https://myfigurecollection.net/entry/1654",
//                 ],
//                 ["フェイト", "Fate", ""],
//                 ["フェイト", "Fate", ""],
//                 ["フェイト", "Fate < 6000", ""],
//                 [
//                     "アルティメットまどか",
//                     "Ultimate Madoka",
//                     "https://myfigurecollection.net/entry/38598",
//                 ],
//                 [
//                     "ロキシー",
//                     "Roxy",
//                     "https://myfigurecollection.net/entry/122863",
//                 ],
//                 [
//                     "ロキシー ・ミグルディア",
//                     "Roxy Migurdia",
//                     "https://myfigurecollection.net/entry/122863",
//                 ],
//                 [
//                     "ニトクリス",
//                     "Nitocris",
//                     "https://myfigurecollection.net/entry/120212",
//                 ],
//                 [
//                     "ジャンヌ・ダルク",
//                     "Jeanne d'Arc",
//                     "https://myfigurecollection.net/entry/107551",
//                 ],
//                 [
//                     "ジャンヌ・ダルク [オルタ]",
//                     "Jeanne d'Arc (Alter)",
//                     "https://myfigurecollection.net/entry/107551",
//                 ],
//                 [
//                     "マシュ・キリエライト",
//                     "Mash Kyrielight",
//                     "https://myfigurecollection.net/entry/87933",
//                 ],
//                 [
//                     "スカサハ",
//                     "Scáthach",
//                     "https://myfigurecollection.net/entry/88034",
//                 ],
//                 [
//                     "酒呑童子",
//                     "Shuten Douji",
//                     "https://myfigurecollection.net/entry/110133",
//                 ],
//                 [
//                     "玉藻の前",
//                     "Tamamo no Mae",
//                     "https://myfigurecollection.net/entry/23053",
//                 ],
//                 [
//                     "モードレッド",
//                     "Mordred",
//                     "https://myfigurecollection.net/entry/60272",
//                 ],
//                 [
//                     "アルベド",
//                     "Albedo",
//                     "https://myfigurecollection.net/entry/88609",
//                 ],
//                 [
//                     "夜刀神 十香",
//                     "Yatogami Tohka",
//                     "https://myfigurecollection.net/entry/37035",
//                 ],
//                 [
//                     "時崎 狂三",
//                     "Tokisaki Kurumi",
//                     "https://myfigurecollection.net/entry/42167",
//                 ],
//                 ["1/4 FREEing", "1/4 FREEing", ""],
//                 ["モナ", "Mona", "https://myfigurecollection.net/entry/214927"],
//                 [
//                     "モナ・メギストス",
//                     "Mona Megistus",
//                     "https://myfigurecollection.net/entry/214927",
//                 ],
//                 ["レム", "Rem", "https://myfigurecollection.net/entry/99093"],
//                 [
//                     "鬼レム -Crystal Dress Ver- 渋谷スクランブル",
//                     "Demon Rem",
//                     "https://myfigurecollection.net/item/1121990",
//                 ],
//                 ["", "", ""],
//                 [
//                     "ミーア モンスター娘のいる日常",
//                     "Miia",
//                     "https://myfigurecollection.net/entry/60608",
//                 ],
//                 ["", "", ""],
//                 [
//                     "渡我 被身子",
//                     "Toga Himiko",
//                     "https://myfigurecollection.net/entry/108465",
//                 ],
//                 [
//                     "ジブリール",
//                     "Jibril",
//                     "https://myfigurecollection.net/entry/64373",
//                 ],
//                 [
//                     "t-most 喜多川 海夢",
//                     "Kitagawa Marin",
//                     "https://myfigurecollection.net/entry/211310",
//                 ],
//                 ["t-most", "t-most", ""],
//                 [
//                     "イシュタル",
//                     "Ishtar",
//                     "https://myfigurecollection.net/entry/123125",
//                 ],
//                 [
//                     "レミリア・スカーレット",
//                     "Remilia Scarlet",
//                     "https://myfigurecollection.net/entry/1743",
//                 ],
//                 [
//                     "宝鐘 マリン",
//                     "Hoshou Marine",
//                     "https://myfigurecollection.net/entry/201375",
//                 ],
//                 ["ライザリン・シュタウト", "Reisalin Stout", ""],
//                 ["", "", ""],
//                 ["フェイト アルター", "Fate Alter", ""],
//                 ["", "", ""],
//                 ["1円～", "starting from 1 yen.", ""],
//                 ["美少女", "Beautiful Girl Figures", ""],
//                 ["", "", ""],
//                 ["", "", ""],
//                 [
//                     "ロキシー コトブキヤ",
//                     "Roxy Kotobukiya",
//                     "https://myfigurecollection.net/item/1389961",
//                 ],
//                 [
//                     "マシュ・キリエライト ストロンガー",
//                     "Mash Kyrielight Stronger",
//                     "",
//                 ],
//                 [
//                     "アルトリア・ペンドラゴン アルター",
//                     "Altria Pendragon Alter",
//                     "https://myfigurecollection.net/item/287683",
//                 ],
//             ]),
//         );
//     }
// });

const range = (start, stop, step = 1) => {
    if (stop === undefined) {
        [start, stop] = [0, start];
    }
    return Array.from(
        { length: Math.ceil((stop - start) / step) },
        (_, i) => start + i * step,
    );
};

// Calculate Euclidean distance between two RGB colors
function colorDistance(c1, c2) {
    const [r1, g1, b1] = parseColor(c1);
    const [r2, g2, b2] = parseColor(c2);
    return Math.sqrt(
        Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2),
    );
}

// Sort array greedily to maximize adjacent contrast
function sortByHighestContrast(colors) {
    if (colors.length <= 1) return [...colors];

    const pool = [...colors];
    const sorted = [pool.shift()]; // Start with the first color

    while (pool.length > 0) {
        const lastColor = sorted[sorted.length - 1];
        let maxDist = -1;
        let nextIndex = 0;

        // Find the remaining color with the maximum distance from lastColor
        for (let i = 0; i < pool.length; i++) {
            const dist = colorDistance(lastColor, pool[i]);
            if (dist > maxDist) {
                maxDist = dist;
                nextIndex = i;
            }
        }

        sorted.push(pool.splice(nextIndex, 1)[0]);
    }

    return sorted;
}

function getLink(name, mfc) {
    if (!mfc) {
        if (!name) return "";

        return {
            url:
                "http://google.com.br/search?q=myfigurecollection+" +
                encodeURIComponent(name),
            text: "G",
        };
    }

    const isItem = /^https:\/\/myfigurecollection\.net\/item\//.test(mfc);

    const baseUrl = isItem
        ? "https://myfigurecollection.net/?_tb=picture&itemId="
        : "https://myfigurecollection.net/?tab=search&rootId=0&status=-1&categoryId=-1&contentLevel=-1&excludeContentLevel=0&domainId=-1&noReleaseDate=0&releaseTypeId=0&ratingId=0&isCastoff=0&hasBootleg=0&tagId=0&noBarcode=0&clubId=0&excludeClubId=0&listId=0&isDraft=0&year=2026&month=10&separator=0&sort=popularity&order=desc&output=3&current=categoryId&page=1&_tb=item&orEntries%5B%5D=";

    const lastSegment = mfc.split("/").filter(Boolean).at(-1);

    return {
        url: baseUrl + lastSegment,
        text: isItem ? "F" : "C",
    };
}

function getBuyeeLink(B4, A4, AG4, AH4, label, sort = "") {
    if (!B4) return "";

    const query = B4 + (A4 ? " フィギュア" : "");

    const params = new URLSearchParams({
        conversionType: "top_page_search",
        ...(sort ? { sort } : {}),
        price_min: AG4,
        price_max: AH4,
    });

    const url = `https://buyee.jp/item/crosssearch/query/${encodeURIComponent(query).replaceAll("%2F", "%252F")}?${params}`;

    return {
        url,
        text: label,
    };
}
function getDoorzoLink(B4, minPrice, maxPrice, label, sort = "created_desc") {
    if (!B4) return "";

    const params = new URLSearchParams({
        fid: 1328,
        sid: 81,
        identity: 100006,
        website:
            '["mercari","rakuma","surugaya","paypay","rakuten","yahoo","mercari-auction"]',
        keywords: B4,
        priceMin: minPrice,
        priceMax: maxPrice,
        isStock: "true",
        seller: '[""]',
        sort,
    });

    return {
        url: `https://www.doorzo.com/en/search?${params}`,
        text: label,
    };
}
function getJSubcultureLink(B3, minPrice, maxPrice, label, sort = 0) {
    if (!B3) return "";

    const params = new URLSearchParams({
        sh_mercari: 1,
        keyword: B3,
        category_id: 1328,
        category_id2: 81,
        price_min: minPrice,
        price_max: maxPrice,
        condition_all: 0,
        condition01: 0,
        condition02: 0,
        condition03: 0,
        condition04: 0,
        condition05: 0,
        condition06: 0,
        genuine: 0,
        seller: 0,
        seller_id: "",
        shipping: 2,
        sort,
    });

    return {
        url: `https://www.j-subculture.com/en/searches/mercari-lists?${params}`,
        text: label,
    };
}

function getJSubcultureFleaMarketLink(B3, minPrice, maxPrice, label, sort = 1) {
    if (!B3) return "";

    const params = new URLSearchParams({
        sh_fleamarket: 1,
        keyword: B3,
        category_id: 2511,
        category_id2: 15160,
        price_min: minPrice,
        price_max: maxPrice,
        condition_all: 0,
        condition01: 0,
        condition02: 0,
        condition03: 0,
        condition04: 0,
        condition05: 0,
        seller_id: "",
        sort,
    });

    return {
        url: `https://www.j-subculture.com/en/searches/fleamarket-lists?${params}`,
        text: label,
    };
}

function getJSubcultureAuctionLink(
    B3,
    A3,
    minPrice,
    maxPrice,
    label,
    select = "22",
) {
    if (!B3) return "";

    const keyword = B3 + (A3 ? " フィギュア" : "");

    const params = new URLSearchParams({
        api: 1,
        keyword,
        category_id: "2A9DD7EAD3E54A1",
        price_type: "currentprice",
        min: minPrice,
        max: maxPrice,
        item_status: 0,
        "item_type[]": "auction",
        is_appraisal: 0,
        freeshipping: 0,
        buynow: 0,
        store: 0,
        seller_auc_user_id: "",
        new: 0,
        item_state: "open",
        select,
        search: "Search",
    });

    return {
        url: `https://auction.j-subculture.com/en/items/search?${params}`,
        text: label,
    };
}

function getMarketplaceLink(site, B3, C3, label) {
    const enc = encodeURIComponent;

    const links = {
        olx: () =>
            !B3 ? "" : `https://www.olx.com.br/brasil?sf=1&q=${enc(C3)}`,

        shopee: () =>
            !C3
                ? ""
                : `https://shopee.com.br/search?fe_filter_options=%5B%7B%22group_name%22%3A%22LOCATIONS%22%2C%22values%22%3A%5B%22Nacional%22%5D%7D%5D&keyword=${enc(C3)}`,

        mercadolivre: () =>
            !B3
                ? ""
                : `https://lista.mercadolivre.com.br/${enc(C3).replace(/%20/g, "-")}`,

        aliexpress: () =>
            !C3
                ? ""
                : `https://pt.aliexpress.com/w/wholesale-${enc(C3).replace(/-/g, "%2525252d").replace(/%20/g, "-")}.html?spm=a2g0o.home.search.0`,

        ninningame: () =>
            !C3
                ? ""
                : `https://www.nin-nin-game.com/en/search?orderby=price&orderway=desc&&filter=1&available=1&search_query=${enc(C3.replace(/ /g, "+"))}`,

        solarisjapan: () =>
            !C3
                ? ""
                : `https://solarisjapan.com/search/?category=Figure&query=${enc(C3)}`,

        biginjapan: () =>
            !C3
                ? ""
                : `https://www.biginjap.com/en/search?controller=search&orderby=p.date_add&orderway=desc&submit_search=Search&search_query=${enc(C3)}`,

        exfigure: () =>
            !C3
                ? ""
                : `https://exfigure.com/search?q=${enc(C3.replace(/ /g, "+"))}`,

        mandarake: () =>
            !B3
                ? ""
                : `https://order.mandarake.co.jp/order/listPage/list?categoryCode=02&keyword=${enc(B3)}`,
    };

    const url = links[site]?.();

    return url ? { url, text: label } : "";
}

function createTable() {
    document.body.innerHTML = "";
    let arr = [
        [
            "アストルフォ",
            "Astolfo",
            "https://myfigurecollection.net/entry/81766",
        ],
        ["", "", ""],
    ];
    try {
        arr = JSON.parse(localStorage.getItem("table")) ?? arr;
    } catch (e) {
        console.error(e);
    }
    if (!arr) arr = [["", "", ""]];

    function unwrapLink({ url, text }) {
        return url && text ? `<a href="${url}" alt="${name}">${text}</a>` : ""; //  target="_blank";
    }

    const isFigure = true;
    const minPrice = 0;
    const maxPrice = 20000;

    let data = arr.map((n) => []);
    const top2 = [];
    const ths = [];

    const addColumn = (getValue, names, group = "") => {
        const headers = Array.isArray(names) ? names : [names];

        data.forEach((n, i) => n.push(...getValue(arr[i])));
        top2.push([group, headers.length]);
        ths.push(...headers);
    };

    function ul(links) {
        return links;
    }

    const addColumnS = (getValue, names, group = "") => {
        addColumn(
            ([name_japanese, name, mfc]) =>
                getValue([name_japanese, name, mfc]).map(({ url, text }, i) =>
                    url && text
                        ? `<a href="${url}" alt="${name}" aria-label="${[name, group, Array.isArray(names) ? names[i] : names].join(" ").trim()}" data-microtip-position="top" role="tooltip">${text}</a>`
                        : "",
                ),
            names,
            group,
        );
    };

    addColumn(([name_japanese]) => [name_japanese], "Name JPN");
    addColumn(([, name]) => [name], "Name");

    addColumn(([, name, mfc]) => [mfc], "M");
    addColumnS(([, name, mfc]) => [{ url: mfc, text: "M" }], "MFC");
    addColumnS(([, name, mfc]) => [getLink(name, mfc)], "MFC");

    addColumnS(
        ([name_japanese]) => [
            getBuyeeLink(name_japanese, isFigure, minPrice, maxPrice, "N"),
            getBuyeeLink(
                name_japanese,
                isFigure,
                minPrice,
                maxPrice,
                "L",
                "price_asc",
            ),
            getBuyeeLink(
                name_japanese,
                isFigure,
                minPrice,
                maxPrice,
                "H",
                "price_desc",
            ),
        ],
        ["N", "L", "H"],
        "Buyee",
    );

    addColumnS(
        ([name_japanese, name, mfc]) => [
            getDoorzoLink(name_japanese, minPrice, maxPrice, "N"),
            getDoorzoLink(name_japanese, minPrice, maxPrice, "L", "price_asc"),
            getDoorzoLink(name_japanese, minPrice, maxPrice, "H", "price_desc"),
        ],
        ["N", "L", "H"],
        "Doorzo",
    );

    addColumnS(
        ([name_japanese, name, mfc]) => [
            getJSubcultureLink(name_japanese, minPrice, maxPrice, "N", 0),
            getJSubcultureLink(name_japanese, minPrice, maxPrice, "L", 2),
            getJSubcultureLink(name_japanese, minPrice, maxPrice, "H", 1),
        ],
        ["N", "L", "H"],
        "Mercari",
    );

    addColumnS(
        ([name_japanese, name, mfc]) => [
            getJSubcultureFleaMarketLink(
                name_japanese,
                minPrice,
                maxPrice,
                "N",
                1,
            ),
            getJSubcultureFleaMarketLink(
                name_japanese,
                minPrice,
                maxPrice,
                "L",
                2,
            ),
            getJSubcultureFleaMarketLink(
                name_japanese,
                minPrice,
                maxPrice,
                "H",
                3,
            ),
        ],
        ["N", "L", "H"],
        "Flea",
    );

    addColumnS(
        ([name_japanese, name, mfc]) => [
            getJSubcultureAuctionLink(
                name_japanese,
                isFigure,
                minPrice,
                maxPrice,
                "N",
                "22",
            ),
            // getJSubcultureAuctionLink(
            //     name_japanese,
            //     isFigure,
            //     minPrice,
            //     maxPrice,
            //     "L",
            //     "01",
            // ),
            // getJSubcultureAuctionLink(
            //     name_japanese,
            //     isFigure,
            //     minPrice,
            //     maxPrice,
            //     "H",
            //     "02",
            // ),
            getJSubcultureAuctionLink(
                name_japanese,
                isFigure,
                minPrice,
                maxPrice,
                "B",
                "03",
            ),
            getJSubcultureAuctionLink(
                name_japanese,
                isFigure,
                minPrice,
                maxPrice,
                "E",
                "05",
            ),
        ],
        ["N", "B", "E"], //, "L", "H"
        "Auction",
    );

    addColumnS(
        ([name_japanese, name, mfc]) => [
            getMarketplaceLink("olx", name_japanese, name, "OLX"),
            getMarketplaceLink("shopee", name_japanese, name, "SHO"),
            getMarketplaceLink("mercadolivre", name_japanese, name, "ML"),
        ],
        ["OLX", "SHO", "ML"],
        "Brasil",
    );

    addColumnS(
        ([name_japanese, name, mfc]) => [
            getMarketplaceLink("aliexpress", name_japanese, name, "ALI"),
        ],
        "ALI",
    );

    addColumnS(
        ([name_japanese, name, mfc]) => [
            getMarketplaceLink("ninningame", name_japanese, name, "NNG"),
            getMarketplaceLink("solarisjapan", name_japanese, name, "SOL"),
            getMarketplaceLink("biginjapan", name_japanese, name, "BIG"),
            getMarketplaceLink("exfigure", name_japanese, name, "EX"),
        ],
        ["NNG", "SOL", "BIG", "EX"],
    );

    addColumnS(
        ([name_japanese, name, mfc]) => [
            getMarketplaceLink("mandarake", name_japanese, name, "MAN"),
        ],
        "MAN",
    );

    addColumn(([, name]) => [name], "Name");
    addColumn(
        ([, name]) => [
            `<button onclick="addRow([...this.parentElement.parentElement.parentElement.children].indexOf(this.parentElement.parentElement)+1);">+</button>`,
        ],
        ``,
    );
    addColumn(
        ([, name]) => [
            `<button onclick="this.parentElement.parentElement.remove(); updateRowIndexes(); save();">X</button>`,
        ],
        `<button onclick="createTable();">↻</button>`,
    );

    let u = 0;
    let l = 0;
    const bolder = data[0].map((_, i) => {
        l++;
        if (l >= top2[u][1]) {
            l = 0;
            u++;
            return true;
        }
        return false;
    });

    const html = `<table style="border-spacing: 0;">
    <thead>
        <tr>
            ${top2.map(([cell, colspan]) => `<th colspan="${colspan}" class="bolder">${cell}</th>`).join("\n")}
        </tr>
        <tr>
            ${ths.map((cell, i) => `<th${bolder[i] ? ' class="bolder"' : ""}>${cell}</th>`).join("\n")}
        </tr>
    </thead>
    <tbody style="--total: ${data.length}">${data
        .map((row, i) => {
            return `<tr class="mytr"  draggable="true" style="--row: ${i};">${row
                .map(
                    (cell, i) =>
                        `<td${bolder[i] ? ' class="bolder"' : ""}${i < 3 ? ' contenteditable="true"' : ""}>${cell}</td>`,
                )
                .join("")}</tr>`;
        })
        .join("")}</tbody>
</table>`;

    document.addEventListener("input", (e) => {
        if (!e.target.matches("td[contenteditable]")) return;

        const table = [
            ...e.target.closest("table").querySelectorAll("tbody tr.mytr"),
        ].map((tr) =>
            [...tr.querySelectorAll("td")]
                .slice(0, 3)
                .map((td) => td.textContent),
        );
        const json = JSON.stringify(table);
        localStorage.setItem("table", json);
    });

    document.body.innerHTML = html;

    const originalTable = document.querySelector("table");

    const stickyWrapper = document.createElement("div");
    stickyWrapper.className = "sticky-header-wrapper";

    const clonedTable = originalTable.cloneNode(true);

    stickyWrapper.appendChild(clonedTable);
    originalTable.parentNode.insertBefore(stickyWrapper, originalTable);

    Object.assign(originalTable.style, {
        marginTop: "calc(var(--sticky-b) * -1)",
    });

    const tbody = originalTable.querySelector("tbody");

    let tooltips = [];

    tbody.addEventListener("dragstart", () => {
        tooltips = [...tbody.querySelectorAll("[data-microtip-position]")].map(
            (el) => ({
                el,
                position: el.getAttribute("data-microtip-position"),
                role: el.getAttribute("role"),
                label: el.getAttribute("aria-label"),
            }),
        );

        tooltips.forEach(({ el }) => {
            el.removeAttribute("data-microtip-position");
            el.removeAttribute("role");
        });
    });

    tbody.addEventListener("dragend", () => {
        tooltips.forEach(({ el, position, role }) => {
            el.setAttribute("data-microtip-position", position);
            el.setAttribute("role", role);
        });

        tooltips = [];
    });

    let draggedRow;
    tbody.addEventListener("dragstart", (e) => {
        document.body.classList.add("dragging");
        draggedRow = e.target.closest("tr.mytr");
        if (!draggedRow) return;

        e.dataTransfer.effectAllowed = "move";
    });
    let t;
    tbody.addEventListener("dragover", (e) => {
        e.preventDefault();

        const target = e.target.closest("tr.mytr");
        if (!target || target === draggedRow) return;

        const rect = target.getBoundingClientRect();
        const after = e.clientY > rect.top + rect.height / 2;
        [...tbody.querySelectorAll("tr.mytr")].forEach((el) => {
            el.style.borderTop = el.style.borderBottom = "";
        });
        t = after ? target.nextSibling : target;
        if (t) t.style.borderTop = "4px solid #f00";
        if (t.previousElementSibling)
            t.previousElementSibling.style.borderBottom = "4px solid #f00";

        //
    });

    tbody.addEventListener("dragend", () => {
        document.body.classList.remove("dragging");
        [...tbody.querySelectorAll("tr.mytr")].forEach((el) => {
            el.style.borderTop = el.style.borderBottom = "";
        });
        if (t) tbody.insertBefore(draggedRow, t);
        t = null;
        draggedRow = null;

        save();
        updateRowIndexes();
    });

    function updateRowIndexes() {
        [...tbody.children].forEach((tr, i) => {
            tr.style.setProperty("--row", i);
        });
    }
    window.updateRowIndexes = updateRowIndexes;

    // let b = document.createElement("button");
    // b.innerText = "+";
    // b.style.width = "100%";
    // b.addEventListener("click", () => {
    //     const arr = [...tbody.querySelectorAll("tr.mytr")].map((tr) =>
    //         [...tr.querySelectorAll("td")]
    //             .slice(0, 3)
    //             .map((td) => td.textContent),
    //     );
    //     arr.push(["", "", ""]);

    //     localStorage.setItem("table", JSON.stringify(arr));
    //     createTable();
    // });
    // document.body.appendChild(b);

    const BASE_URL = "https://mantledb.sh/v2";
    const NAMESPACE = "figuretables"; // Change this to your custom namespace

    // SAVE: Creates or completely overwrites data at a path
    async function dbSave(path, data) {
        const response = await fetch(`${BASE_URL}/${NAMESPACE}/${path}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(
                `Save failed with status ${response.status}: ${response.statusText}`,
            );
        }
        return response.json();
    }

    // LOAD: Fetches data at a path. Returns null gracefully on 404.
    async function dbLoad(path) {
        const response = await fetch(`${BASE_URL}/${NAMESPACE}/${path}`);

        if (response.status === 404) {
            return null;
        }

        if (!response.ok) {
            throw new Error(
                `Load failed with status ${response.status}: ${response.statusText}`,
            );
        }

        return response.json();
    }
    const randomString = (
        length = 32, //"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    ) =>
        Array.from(
            { length },
            () => "abcdefghijklmnopqrstuvwxyz"[(Math.random() * 52) | 0],
        ).join("");

    const containerUserPass = document.createElement("div");
    containerUserPass.className = "flex";
    document.body.appendChild(containerUserPass);
    const textUsername = document.createElement("input");
    if (!localStorage.hasOwnProperty("username"))
        localStorage.setItem("username", randomString(32));
    textUsername.addEventListener("change", () =>
        localStorage.setItem("username", textUsername.value),
    );
    textUsername.addEventListener("input", () =>
        localStorage.setItem("username", textUsername.value),
    );

    textUsername.value = localStorage.getItem("username");

    containerUserPass.appendChild(textUsername);
    const textPassword = document.createElement("input");
    if (!localStorage.hasOwnProperty("password"))
        localStorage.setItem("password", randomString(32));

    textPassword.value = localStorage.getItem("password");
    textPassword.addEventListener("change", () =>
        localStorage.setItem("password", textPassword.value),
    );
    textPassword.addEventListener("input", () =>
        localStorage.setItem("password", textPassword.value),
    );
    containerUserPass.appendChild(textPassword);

    async function getId(username, password, stre = 64) {
        const encoder = new TextEncoder();

        const key = await crypto.subtle.importKey(
            "raw",
            encoder.encode(password),
            "PBKDF2",
            false,
            ["deriveBits"],
        );

        const bits = await crypto.subtle.deriveBits(
            {
                name: "PBKDF2",
                salt: encoder.encode(
                    `my-app-v1:${username.trim().toLowerCase()}`,
                ),
                iterations: 600000,
                hash: "SHA-256",
            },
            key,
            256,
        );

        return [...new Uint8Array(bits)]
            .slice(0, stre)
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
    }

    const containerButtons = document.createElement("div");
    containerButtons.className = "flex";
    document.body.appendChild(containerButtons);

    const buttonSave = document.createElement("button");
    buttonSave.innerText = "Save";
    buttonSave.addEventListener("click", async () => {
        try {
            buttonSave.innerText = "...";
            await dbSave(
                getId(textUsername.value, textPassword.value),
                fromTable(),
            );
        } catch (e) {
            alert(e.toString());
        } finally {
            buttonSave.innerText = "Save";
        }
    });
    containerButtons.appendChild(buttonSave);

    const buttonLoad = document.createElement("button");
    buttonLoad.innerText = "Load";
    buttonLoad.addEventListener("click", async () => {
        try {
            buttonLoad.innerText = "...";
            const data = await dbLoad(
                getId(textUsername.value, textPassword.value),
            );
            if (data) {
                localStorage.setItem("table", JSON.stringify(data));
                createTable();
            }
        } catch (e) {
            alert(e.toString());
        } finally {
            buttonLoad.innerText = "Load";
        }
    });
    containerButtons.appendChild(buttonLoad);

    function fromTable() {
        return [...tbody.querySelectorAll("tr.mytr")].map((tr) =>
            [...tr.querySelectorAll("td")]
                .slice(0, 3)
                .map((td) => td.textContent),
        );
    }
    function save() {
        localStorage.setItem("table", JSON.stringify(fromTable()));
    }

    window.save = save;

    function addRow(index) {
        const arr = [...tbody.querySelectorAll("tr.mytr")].map((tr) =>
            [...tr.querySelectorAll("td")]
                .slice(0, 3)
                .map((td) => td.textContent),
        );

        arr.splice(index, 0, ["", "", ""]);
        localStorage.setItem("table", JSON.stringify(arr));

        createTable();
    }
    window.addRow = addRow;
}
createTable();
