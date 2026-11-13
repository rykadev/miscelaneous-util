console.log(new Date());

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
function getDoorzoLink(
    B4,
    minPrice,
    maxPrice,
    label,
    sort = "created_desc",
    websites = '["mercari","rakuma","surugaya","paypay","rakuten","yahoo","mercari-auction"]',
) {
    if (!B4) return "";

    const params = new URLSearchParams({
        fid: 1328,
        sid: 81,
        identity: 100006,
        website: websites,
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

    const addColumnO = (getObj, group = "") => {
        // addColumnS(Object.keys(obj), Object.values(obj), group);

        let names;
        data.forEach((n, i) => {
            const obj = getObj(arr[i]);
            names = Object.keys(obj);
            const getValue = Object.values(obj);

            n.push(
                ...getValue.map(({ url, text }, j) =>
                    url && text
                        ? `<a href="${url}" aria-label="${[arr[i][1], names[j], group].join(" ").trim()}" data-microtip-position="top" role="tooltip">${text}</a>`
                        : "",
                ),
            );
        });
        top2.push([group, names.length]);
        ths.push(...names);
    };
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

    addColumnO(
        ([name_japanese]) => ({
            N: getBuyeeLink(name_japanese, isFigure, minPrice, maxPrice, "N"),
            L: getBuyeeLink(
                name_japanese,
                isFigure,
                minPrice,
                maxPrice,
                "L",
                "price_asc",
            ),
            H: getBuyeeLink(
                name_japanese,
                isFigure,
                minPrice,
                maxPrice,
                "H",
                "price_desc",
            ),
        }),
        "Buyee",
    );

    addColumnO(
        ([name_japanese, name, mfc]) => ({
            N: getDoorzoLink(name_japanese, minPrice, maxPrice, "N"),
            L: getDoorzoLink(
                name_japanese,
                minPrice,
                maxPrice,
                "L",
                "price_asc",
            ),
            H: getDoorzoLink(
                name_japanese,
                minPrice,
                maxPrice,
                "H",
                "price_desc",
            ),
            M: getDoorzoLink(
                name_japanese,
                minPrice,
                maxPrice,
                "M",
                "created_desc",
                `["mercari-auction"]`,
            ),
        }),
        "Doorzo",
    );
    addColumnO(
        ([name_japanese, name, mfc]) => ({
            N: getDoorzoLink(name_japanese, minPrice, maxPrice, "N"),
            L: getDoorzoLink(
                name_japanese,
                minPrice,
                maxPrice,
                "L",
                "price_asc",
            ),
            H: getDoorzoLink(
                name_japanese,
                minPrice,
                maxPrice,
                "H",
                "price_desc",
            ),
        }),
        "Doorzo",
    );

    addColumnO(
        ([name_japanese, name, mfc]) => ({
            N: getJSubcultureLink(name_japanese, minPrice, maxPrice, "N", 0),
            L: getJSubcultureLink(name_japanese, minPrice, maxPrice, "L", 2),
            H: getJSubcultureLink(name_japanese, minPrice, maxPrice, "H", 1),
        }),
        "Merca",
    );

    addColumnO(
        ([name_japanese, name, mfc]) => ({
            N: getJSubcultureFleaMarketLink(
                name_japanese,
                minPrice,
                maxPrice,
                "N",
                1,
            ),
            L: getJSubcultureFleaMarketLink(
                name_japanese,
                minPrice,
                maxPrice,
                "L",
                2,
            ),
            H: getJSubcultureFleaMarketLink(
                name_japanese,
                minPrice,
                maxPrice,
                "H",
                3,
            ),
        }),
        "Flea",
    );

    addColumnO(
        ([name_japanese, name, mfc]) => ({
            N: getJSubcultureAuctionLink(
                name_japanese,
                isFigure,
                minPrice,
                maxPrice,
                "N",
                "22",
            ),
            L: getJSubcultureAuctionLink(
                name_japanese,
                isFigure,
                minPrice,
                maxPrice,
                "L",
                "01",
            ),
            // H: getJSubcultureAuctionLink(
            //     name_japanese, isFigure, minPrice, maxPrice, "H", "02",
            // ),
            B: getJSubcultureAuctionLink(
                name_japanese,
                isFigure,
                minPrice,
                maxPrice,
                "B",
                "03",
            ),
            E: getJSubcultureAuctionLink(
                name_japanese,
                isFigure,
                minPrice,
                maxPrice,
                "E",
                "05",
            ),
        }),
        "Auction",
    );

    addColumnO(
        ([name_japanese, name, mfc]) => ({
            OLX: getMarketplaceLink("olx", name_japanese, name, "OLX"),
            SHO: getMarketplaceLink("shopee", name_japanese, name, "SHO"),
            ML: getMarketplaceLink("mercadolivre", name_japanese, name, "ML"),
        }),
        "Brasil",
    );

    addColumnO(([name_japanese, name, mfc]) => ({
        ALI: getMarketplaceLink("aliexpress", name_japanese, name, "ALI"),
    }));

    addColumnO(([name_japanese, name, mfc]) => ({
        NNG: getMarketplaceLink("ninningame", name_japanese, name, "NNG"),
        SOL: getMarketplaceLink("solarisjapan", name_japanese, name, "SOL"),
        BIG: getMarketplaceLink("biginjapan", name_japanese, name, "BIG"),
        EX: getMarketplaceLink("exfigure", name_japanese, name, "EX"),
    }));

    addColumnO(([name_japanese, name, mfc]) => ({
        MAN: getMarketplaceLink("mandarake", name_japanese, name, "MAN"),
    }));

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
            ${ths.map((cell, i) => `<th class="column-${i}${bolder[i] ? " bolder" : ""}">${cell}</th>`).join("\n")}
        </tr>
    </thead>
    <tbody style="--total: ${data.length}">${data
        .map((row, i) => {
            return `<tr class="mytr"  draggable="true" style="--row: ${i};">${row
                .map(
                    (cell, i) =>
                        `<td class="column-${i}${bolder[i] ? " bolder" : ""}"${i < 3 ? ' contenteditable="true"' : ""}>${cell}</td>`,
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
    document.body.style.setProperty("--sticky-b", Math.ceil(originalTable.querySelector("thead").getBoundingClientRect().height) + "px")

    const stickyWrapper2 = document.createElement("div");
    stickyWrapper2.className = "po";
    stickyWrapper2.style.height = Math.ceil(originalTable.getBoundingClientRect().height) + "px";


    const stickyWrapper = document.createElement("div");
    stickyWrapper.className = "sticky-header-wrapper";

    const clonedTable = originalTable.cloneNode(true);

    stickyWrapper.appendChild(clonedTable);
    stickyWrapper2.appendChild(stickyWrapper);
    originalTable.parentNode.insertBefore(stickyWrapper2, originalTable);

    for (let i = 0; i < 2; i++) {
        const nameWrapper2 = document.createElement("div");
        nameWrapper2.className = "po";
        // nameWrapper2.style.height = "100%";
        nameWrapper2.style.width =
            Math.ceil(originalTable.getBoundingClientRect().width) + "px";

        const nameWrapper = document.createElement("div");
        nameWrapper.className = "sticky-name-wrapper";

        const clonedTableN = originalTable.cloneNode(true);

        nameWrapper.appendChild(clonedTableN);
        nameWrapper2.appendChild(nameWrapper);
        originalTable.parentNode.insertBefore(nameWrapper2, originalTable);

        Object.assign(nameWrapper.style, {
            top: "unset",
            left: 0,
            width:
                Math.ceil(
                    originalTable
                        .querySelector(".column-1")
                        .getBoundingClientRect().width,
                ) + "px",
            marginLeft:
                Math.ceil(
                    originalTable
                        .querySelector(".column-0")
                        .getBoundingClientRect().width,
                ) + "px",
        });

        clonedTableN.style.marginLeft =
            "-" +
            Math.ceil(
                originalTable.querySelector(".column-0").getBoundingClientRect()
                    .width,
            ) +
            "px";

        if(i == 1){
            
            Object.assign(nameWrapper.style, {
                left: "0",
                top: "0",
                height: "var(--sticky-b)",
                backgroundColor: "var(--header-bg)",
                borderBottom: "var(--border)",
            });

        nameWrapper2.style.height =
            Math.ceil(originalTable.getBoundingClientRect().height) + "px";

        }
    }

    // Object.assign(originalTable.style, {
    //     marginTop: "calc(var(--sticky-b) * -1 - 4px)",
    // });

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

    const NAMESPACE = "figuretables";

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
    textUsername.addEventListener("input", () =>
        localStorage.setItem("username", textUsername.value),
    );

    textUsername.value = localStorage.getItem("username");

    containerUserPass.appendChild(textUsername);
    const textPassword = document.createElement("input");
    textPassword.type = "password";
    if (!localStorage.hasOwnProperty("password"))
        localStorage.setItem("password", randomString(32));

    textPassword.value = localStorage.getItem("password");
    textPassword.addEventListener("input", () =>
        localStorage.setItem("password", textPassword.value),
    );
    containerUserPass.appendChild(textPassword);

    const containerButtons = document.createElement("div");
    containerButtons.className = "flex";
    document.body.appendChild(containerButtons);

    const yieldToBrowser = () =>
        new Promise((resolve) => setTimeout(resolve, 0));

    const buttonSave = document.createElement("button");
    buttonSave.innerText = "Save";
    buttonSave.addEventListener("click", async () => {
        try {
            buttonSave.innerText = "...";
            await yieldToBrowser();

            await dbSave(
                NAMESPACE,
                await getId(textUsername.value, textPassword.value),
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
    buttonLoad.addEventListener("click", () => {
        (async () => {
            try {
                buttonLoad.innerText = "...";
                await yieldToBrowser();

                const data = await dbLoad(
                    NAMESPACE,
                    await getId(textUsername.value, textPassword.value),
                );
                if (data) {
                    localStorage.setItem("table", JSON.stringify(data));
                    createTable();
                } else {
                    alert("Data is null");
                }
            } catch (e) {
                alert(e.toString());
            } finally {
                buttonLoad.innerText = "Load";
            }
        })();
    });
    containerButtons.appendChild(buttonLoad);

    const locUrl = new URL(window.location.href);
    const userParam = locUrl.searchParams.get("username");
    const passParam = locUrl.searchParams.get("password");
    if (userParam && passParam) {
        localStorage.setItem("username", userParam);
        localStorage.setItem("password", passParam);
        locUrl.searchParams.delete("username");
        locUrl.searchParams.delete("password");
        window.location.href = locUrl.toString();
    }

    const buttonCopy = document.createElement("button");
    buttonCopy.innerText = "Copy";
    buttonCopy.style.flex = "unset";
    buttonCopy.style.flexBasis = "40px";

    buttonCopy.addEventListener("click", () => {
        (async () => {
            const url = new URL(window.location.href);
            url.searchParams.set("username", textUsername.value);
            url.searchParams.set("password", textPassword.value);
            await navigator.clipboard.writeText(url.toString());
        })();
    });
    containerButtons.appendChild(buttonCopy);

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
