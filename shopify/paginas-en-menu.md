# Shopify: pagina's en menu voor Van der Voet

## Pagina "Over ons"
Shopify-admin → Online Store → Pages → Add page. Titel: **Over ons**. Plak in de editor (via de knop `<>` voor HTML):

```html
<h2>Plaatwerk en constructie met ervaring</h2>
<p>Firma S. van der Voet &amp; Co. B.V. is een plaatwerk- en constructiebedrijf aan de Edisonstraat in Zoetermeer. We hebben ruime ervaring in het produceren van metaalconstructies op maat.</p>
<p>We ontwikkelen machines en vervaardigen producten voor de food- en non-foodindustrie, maken onderdelen voor industriële koel- en klimaattechniek en hebben veel ervaring met het maken en monteren van componenten voor de horeca: spoeltafels, inbouwkookplaten, spoelbakken, werkbladen en afzuigkappen.</p>
<p>Daarnaast maken we exclusieve kunst- en designobjecten, vaak in nauwe samenwerking met kunstenaars en ontwerpers.</p>
<h2>Zo werken wij</h2>
<ol>
<li><strong>Kennismaken</strong> – u vertelt wat u nodig heeft, met een tekening, schets of alleen een idee.</li>
<li><strong>Ontwerp &amp; offerte</strong> – we werken het ontwerp uit en sturen een heldere offerte.</li>
<li><strong>Productie</strong> – in onze eigen werkplaats wordt alles vakkundig gemaakt en afgewerkt.</li>
<li><strong>Levering &amp; montage</strong> – we leveren af of monteren op locatie.</li>
</ol>
<h2>Materialen &amp; bewerkingen</h2>
<ul>
<li>Roestvrij staal (RVS 304 en 316), staal (verzinkt of gecoat), aluminium, messing en cortenstaal</li>
<li>Knippen, zetten en walsen · TIG- en MIG-lassen · slijpen, borstelen en polijsten · montage op locatie</li>
</ul>
```

## Pagina "Contact & offerte"
Add page, titel **Contact & offerte**, en kies rechts bij *Theme template* het sjabloon **contact** (dan verschijnt automatisch een contactformulier). Inhoud:

```html
<p>Heeft u een vraag of wilt u een vrijblijvende offerte? Vul het formulier in met de gewenste afmetingen, materiaal, aantal en levertermijn. Wij nemen zo snel mogelijk contact met u op.</p>
<p><strong>Firma S. van der Voet &amp; Co. B.V.</strong><br>Edisonstraat 7B<br>2723 RS Zoetermeer<br>KVK 64932257</p>
```

## Hoofdmenu
Online Store → Navigation → **Main menu**:
1. Home
2. Catalogus → *Collections → All products* (submenu: de 5 collecties Horeca & grootkeuken, Food & non-food industrie, Koel- & klimaattechniek, Plaatwerk & constructies, Kunst & design)
3. Over ons → pagina Over ons
4. Contact → pagina Contact & offerte

## Prijzen op aanvraag
Alle producten staan op €0,00. Om "€0,00" en de knop "In winkelwagen" te verbergen:
- Online Store → Themes → Customize → Product-template: verwijder het blok **Buy buttons** en **Price**, en voeg een **Button**-blok toe met tekst "Offerte aanvragen" en link naar de contactpagina.
- Doe hetzelfde voor productkaarten (Theme settings → Product cards: prijs uitzetten, als het thema dit ondersteunt).
