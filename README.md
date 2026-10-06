# Website Firma S. van der Voet & Co. B.V.

Statische website (HTML/CSS/JS, geen build-stap) met een doorzoekbare productcatalogus.

## Pagina's
- `index.html` – home
- `catalogus.html` – catalogus met zoekfunctie en categoriefilters (`?categorie=horeca`)
- `product.html?id=<id>` – detailpagina per product
- `over-ons.html` – over het bedrijf
- `contact.html` – contact- en offerteformulier (opent het e-mailprogramma van de bezoeker)

## Aanpassen
- **Bedrijfsgegevens** (e-mail, telefoon, adres): bovenaan `assets/js/site.js` in `BEDRIJF`.
  E-mail en telefoonnummer zijn nog niet bevestigd — controleer deze.
- **Catalogus**: `assets/js/catalogus-data.js`. Voeg een object toe aan `PRODUCTEN`;
  het verschijnt automatisch in de catalogus. Foto toevoegen: zet het bestand in
  `assets/img/` en vul `afbeelding: "assets/img/naam.jpg"` in.
- **Kleuren/stijl**: `assets/css/style.css` (variabelen bovenaan).

## Lokaal bekijken
```
python3 -m http.server 8000
```
en open http://localhost:8000. Hosten kan op elke statische host (GitHub Pages, Netlify, enz.).
