// Gedeelde functionaliteit: header, footer, catalogus, productdetail en contactformulier.

// Bedrijfsgegevens — pas hier aan, dan wijzigt het overal op de site.
// LET OP: e-mail en telefoon zijn nog niet bevestigd; controleer en vul ze aan.
window.BEDRIJF = {
  naam: "Firma S. van der Voet & Co. B.V.",
  kortNaam: "Van der Voet & Co.",
  slogan: "Plaatwerk & metaalconstructies op maat",
  straat: "Edisonstraat 7B",
  postcodePlaats: "2723 RS Zoetermeer",
  email: "info@firmavdv.nl", // TODO: bevestigen
  telefoon: "", // TODO: invullen, bv. "079 - 000 00 00"
  kvk: "64932257",
  facebook: "https://www.facebook.com/vandervoetzoetermeer/",
};

const ICONEN = {
  horeca:
    '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><rect x="6" y="24" width="52" height="10" rx="2"/><path d="M20 24v-6a6 6 0 0 1 12 0"/><path d="M32 18v6"/><path d="M12 34v22M52 34v22M12 46h40"/><rect x="36" y="26" width="16" height="6" rx="1"/></svg>',
  industrie:
    '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><rect x="4" y="30" width="56" height="8" rx="4"/><circle cx="12" cy="34" r="2"/><circle cx="52" cy="34" r="2"/><path d="M10 38v18M54 38v18M22 30V18h20v12"/><path d="M26 18l6-10 6 10"/></svg>',
  koeltechniek:
    '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M32 6v52M9.5 19l45 26M9.5 45l45-26"/><path d="M26 10l6 6 6-6M26 54l6-6 6 6M10 27l8-2-2-8M54 37l-8 2 2 8M10 37l8 2-2 8M54 27l-8-2 2-8"/></svg>',
  constructie:
    '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M6 56h52M10 56V20h44v36"/><path d="M10 20l11 12 11-12 11 12 11-12M10 44l11-12 11 12 11-12 11 12"/></svg>',
  design:
    '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M32 6c10 12 18 18 18 30a18 18 0 0 1-36 0C14 24 22 18 32 6z"/><path d="M24 50h16M32 36v20"/><path d="M26 30c2-6 6-10 6-10"/></svg>',
};

function icoon(categorie) {
  return ICONEN[categorie] || ICONEN.constructie;
}

function escapeHtml(tekst) {
  return String(tekst).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function beeld(product) {
  if (product.afbeelding) {
    return `<div class="beeldvlak"><img src="${escapeHtml(product.afbeelding)}" alt="${escapeHtml(product.naam)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:2"></div>`;
  }
  return `<div class="beeldvlak" aria-hidden="true">${icoon(product.categorie)}</div>`;
}

// ---------- Header & footer ----------

function renderHeader() {
  const plek = document.getElementById("site-header");
  if (!plek) return;
  const huidig = document.body.dataset.pagina;
  const links = [
    ["index", "index.html", "Home"],
    ["catalogus", "catalogus.html", "Catalogus"],
    ["over", "over-ons.html", "Over ons"],
    ["contact", "contact.html", "Contact"],
  ];
  plek.outerHTML = `
    <header class="site-header">
      <div class="container">
        <a class="logo" href="index.html">
          <span class="logo-mark">VdV</span>
          <span class="logo-tekst"><strong>${BEDRIJF.kortNaam}</strong><span>${BEDRIJF.slogan}</span></span>
        </a>
        <button class="nav-toggle" aria-label="Menu openen" aria-expanded="false">☰</button>
        <nav class="nav" aria-label="Hoofdmenu">
          ${links.map(([id, href, label]) => `<a href="${href}"${id === huidig ? ' class="actief" aria-current="page"' : ""}>${label}</a>`).join("")}
        </nav>
      </div>
    </header>`;
  const knop = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  knop.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    knop.setAttribute("aria-expanded", String(open));
  });
}

function renderFooter() {
  const plek = document.getElementById("site-footer");
  if (!plek) return;
  const jaar = new Date().getFullYear();
  plek.outerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-raster">
          <div>
            <h3>${BEDRIJF.naam}</h3>
            <p>Specialist in plaatwerk en metaalconstructies op maat voor horeca, industrie, koeltechniek en design.</p>
            <p>${BEDRIJF.straat}<br>${BEDRIJF.postcodePlaats}</p>
          </div>
          <div>
            <h3>Navigatie</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="catalogus.html">Catalogus</a></li>
              <li><a href="over-ons.html">Over ons</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              ${BEDRIJF.telefoon ? `<li><a href="tel:${BEDRIJF.telefoon.replace(/[^\d+]/g, "")}">${BEDRIJF.telefoon}</a></li>` : ""}
              <li><a href="mailto:${BEDRIJF.email}">${BEDRIJF.email}</a></li>
              <li><a href="${BEDRIJF.facebook}" target="_blank" rel="noopener">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-onder">
          <span>© ${jaar} ${BEDRIJF.naam}</span>
          <span>KVK ${BEDRIJF.kvk}</span>
        </div>
      </div>
    </footer>`;
}

// ---------- Catalogus ----------

function productKaart(p) {
  return `
    <a class="product" href="product.html?id=${encodeURIComponent(p.id)}">
      ${beeld(p)}
      <div class="product-body">
        <span class="label">${escapeHtml(CATEGORIEEN[p.categorie] || "")}</span>
        <h3>${escapeHtml(p.naam)}</h3>
        <p>${escapeHtml(p.kort)}</p>
        <div class="product-voet"><span>Op maat</span><strong>Bekijk →</strong></div>
      </div>
    </a>`;
}

function initCatalogus() {
  const raster = document.getElementById("producten");
  if (!raster) return;
  const zoek = document.getElementById("zoek");
  const filterBalk = document.getElementById("filters");
  const info = document.getElementById("resultaat-info");

  const params = new URLSearchParams(location.search);
  let actieveCategorie = CATEGORIEEN[params.get("categorie")] ? params.get("categorie") : "alle";

  const opties = [["alle", "Alles"], ...Object.entries(CATEGORIEEN)];
  filterBalk.innerHTML = opties
    .map(([id, label]) => `<button type="button" class="filter" data-categorie="${id}">${label}</button>`)
    .join("");

  function toon() {
    const term = zoek.value.trim().toLowerCase();
    const lijst = PRODUCTEN.filter((p) => {
      if (actieveCategorie !== "alle" && p.categorie !== actieveCategorie) return false;
      if (!term) return true;
      const tekst = [p.naam, p.kort, p.beschrijving, ...(p.opties || []), ...(p.specs || []).flat()].join(" ").toLowerCase();
      return tekst.includes(term);
    });
    filterBalk.querySelectorAll(".filter").forEach((knop) => {
      knop.classList.toggle("actief", knop.dataset.categorie === actieveCategorie);
    });
    info.textContent = `${lijst.length} ${lijst.length === 1 ? "product" : "producten"}`;
    raster.innerHTML = lijst.length
      ? lijst.map(productKaart).join("")
      : `<div class="leeg" style="grid-column:1/-1"><h3>Geen producten gevonden</h3><p>Staat uw product er niet bij? Wij maken vrijwel alles op maat. <a href="contact.html">Neem contact op</a>.</p></div>`;
  }

  filterBalk.addEventListener("click", (e) => {
    const knop = e.target.closest(".filter");
    if (!knop) return;
    actieveCategorie = knop.dataset.categorie;
    const url = new URL(location.href);
    if (actieveCategorie === "alle") url.searchParams.delete("categorie");
    else url.searchParams.set("categorie", actieveCategorie);
    history.replaceState(null, "", url);
    toon();
  });
  zoek.addEventListener("input", toon);
  toon();
}

function initUitgelicht() {
  const plek = document.getElementById("uitgelicht");
  if (!plek) return;
  const ids = ["spoeltafel-rvs", "afzuigkap", "transportband-frame"];
  plek.innerHTML = ids
    .map((id) => PRODUCTEN.find((p) => p.id === id))
    .filter(Boolean)
    .map(productKaart)
    .join("");
}

// ---------- Productdetail ----------

function initProduct() {
  const plek = document.getElementById("product-detail");
  if (!plek) return;
  const id = new URLSearchParams(location.search).get("id");
  const p = PRODUCTEN.find((x) => x.id === id);
  const kop = document.getElementById("product-kop");

  if (!p) {
    kop.innerHTML = `<h1>Product niet gevonden</h1><p>Dit product bestaat niet (meer).</p>`;
    plek.innerHTML = `<p><a class="knop knop-primair" href="catalogus.html">Terug naar de catalogus</a></p>`;
    return;
  }

  document.title = `${p.naam} | ${BEDRIJF.kortNaam}`;
  const cat = CATEGORIEEN[p.categorie] || "";
  kop.innerHTML = `
    <div class="kruimel"><a href="catalogus.html">Catalogus</a> / <a href="catalogus.html?categorie=${p.categorie}">${escapeHtml(cat)}</a></div>
    <h1>${escapeHtml(p.naam)}</h1>
    <p>${escapeHtml(p.kort)}</p>`;

  plek.innerHTML = `
    <div class="detail">
      ${beeld(p)}
      <div>
        <span class="label">${escapeHtml(cat)}</span>
        <p>${escapeHtml(p.beschrijving)}</p>
        ${p.specs && p.specs.length ? `<h3>Specificaties</h3><table class="specs">${p.specs.map(([k, v]) => `<tr><th>${escapeHtml(k)}</th><td>${escapeHtml(v)}</td></tr>`).join("")}</table>` : ""}
        ${p.opties && p.opties.length ? `<h3>Mogelijke opties</h3><div class="tags">${p.opties.map((o) => `<span class="tag">${escapeHtml(o)}</span>`).join("")}</div>` : ""}
        <a class="knop knop-primair" href="contact.html?product=${encodeURIComponent(p.id)}">Offerte aanvragen</a>
        <a class="knop knop-licht" href="catalogus.html">Terug naar catalogus</a>
      </div>
    </div>`;

  const verwant = PRODUCTEN.filter((x) => x.categorie === p.categorie && x.id !== p.id).slice(0, 3);
  const verwantPlek = document.getElementById("verwant");
  if (verwant.length && verwantPlek) {
    verwantPlek.innerHTML = `<h2>Ook in ${escapeHtml(cat)}</h2><div class="producten">${verwant.map(productKaart).join("")}</div>`;
  }
}

// ---------- Contact ----------

function initContact() {
  const form = document.getElementById("contactformulier");
  if (!form) return;

  const keuze = form.querySelector("#onderwerp-product");
  keuze.innerHTML =
    `<option value="">Algemene vraag / maatwerk</option>` +
    PRODUCTEN.map((p) => `<option value="${p.id}">${escapeHtml(p.naam)}</option>`).join("");
  const gekozen = new URLSearchParams(location.search).get("product");
  if (gekozen && PRODUCTEN.some((p) => p.id === gekozen)) keuze.value = gekozen;

  document.querySelectorAll("[data-bedrijf]").forEach((el) => {
    const veld = el.dataset.bedrijf;
    if (veld === "email") el.innerHTML = `<a href="mailto:${BEDRIJF.email}">${BEDRIJF.email}</a>`;
    else if (veld === "telefoon") {
      if (BEDRIJF.telefoon) el.innerHTML = `<a href="tel:${BEDRIJF.telefoon.replace(/[^\d+]/g, "")}">${BEDRIJF.telefoon}</a>`;
      else el.closest("[data-optioneel]")?.remove();
    } else el.textContent = BEDRIJF[veld] || "";
  });

  // Zonder server openen we het e-mailprogramma van de bezoeker met een ingevuld bericht.
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const product = PRODUCTEN.find((p) => p.id === data.get("product"));
    const onderwerp = product ? `Offerteaanvraag: ${product.naam}` : "Vraag via website";
    const regels = [
      `Naam: ${data.get("naam")}`,
      `Bedrijf: ${data.get("bedrijf") || "-"}`,
      `E-mail: ${data.get("email")}`,
      `Telefoon: ${data.get("telefoon") || "-"}`,
      product ? `Product: ${product.naam}` : null,
      "",
      data.get("bericht"),
    ].filter((r) => r !== null);
    location.href = `mailto:${BEDRIJF.email}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(regels.join("\n"))}`;
    document.getElementById("melding").classList.add("zichtbaar");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  initUitgelicht();
  initCatalogus();
  initProduct();
  initContact();
});
