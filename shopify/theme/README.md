# Shopify-thema "Van der Voet"

Eigen Online Store 2.0-thema in de huisstijl van de website (staalgrijs + oranje accent).

## Inhoud
- **Homepage** (`templates/index.json`): hero, vakgebieden (5 collecties), uitgelichte producten, "Waarom Van der Voet", werkwijze in 4 stappen, call-to-action.
- **Productpagina**: foto's of icoon, omschrijving/specificaties, *Prijs op aanvraag* + knop **Offerte aanvragen** (opent de contactpagina met het product ingevuld), vergelijkbare producten.
- **Collecties**: categorieknoppen (uit het submenu van het hoofdmenu), sortering, paginering.
- **Contact & offerte** (`page.contact`): Shopify-contactformulier (komt binnen op het winkel-e-mailadres), adres, kaart.
- **Over ons** (`page.over-ons`): paginatekst + werkwijze + call-to-action.
- Zoeken, winkelwagen, blog, artikel, 404.
- Talen: `en.default.json` (Engels) en `nl.json` (Nederlands).

## Instellingen (Thema aanpassen → Thema-instellingen)
- **Kleuren** en afronding van hoeken.
- **Prijzen & offertes**: standaard uit → overal "Prijs op aanvraag". Zet aan om prijzen te tonen en online bestellen toe te staan. Producten met prijs €0 tonen altijd "Prijs op aanvraag".
- Favicon, social media.

Logo, telefoon, e-mail en openingstijden stel je in bij de secties Header, Footer en Contact.

## Ontwikkelen
Met de Shopify CLI: `shopify theme dev --path shopify/theme` en `shopify theme push --path shopify/theme`.
Controle: `shopify theme check --path shopify/theme`.
