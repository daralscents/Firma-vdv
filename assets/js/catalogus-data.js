// Catalogus van Firma S. van der Voet & Co. B.V.
// Voeg hier producten toe of pas ze aan. Elk product verschijnt automatisch
// in de catalogus (catalogus.html) en krijgt een eigen detailpagina
// (product.html?id=<id>).
//
// Velden:
//   id           unieke korte naam, alleen kleine letters en streepjes
//   naam         productnaam
//   categorie    sleutel uit CATEGORIEEN hieronder
//   kort         één zin voor de productkaart
//   beschrijving uitgebreide tekst voor de detailpagina
//   specs        lijst van [eigenschap, waarde]
//   opties       lijst van mogelijke uitvoeringen / extra's
//   afbeelding   (optioneel) pad naar foto, bv. "assets/img/spoeltafel.jpg"

window.CATEGORIEEN = {
  horeca: "Horeca & grootkeuken",
  industrie: "Food & non-food industrie",
  koeltechniek: "Koel- & klimaattechniek",
  constructie: "Plaatwerk & constructies",
  design: "Kunst & design",
};

window.PRODUCTEN = [
  {
    id: "spoeltafel-rvs",
    naam: "RVS spoeltafel",
    categorie: "horeca",
    kort: "Robuuste spoeltafel in roestvrij staal, volledig op maat voor uw keuken.",
    beschrijving:
      "Onze spoeltafels worden in eigen werkplaats vervaardigd uit hoogwaardig roestvrij staal. Lengte, diepte, aantal spoelbakken, opstaande randen en onderstel stemmen we af op uw keuken en werkproces. Naadloos gelast en hygiënisch af te werken, geschikt voor intensief professioneel gebruik.",
    specs: [
      ["Materiaal", "RVS 304 (AISI 304), optioneel 316"],
      ["Plaatdikte", "1,2 – 1,5 mm"],
      ["Afmetingen", "Volledig op maat"],
      ["Afwerking", "Geborsteld / korrel 240"],
    ],
    opties: ["Eén of meerdere spoelbakken", "Achteropstand", "Onderplank", "Kraangat(en)", "Verstelbare poten"],
  },
  {
    id: "spoelbak-inbouw",
    naam: "Inbouw spoelbak",
    categorie: "horeca",
    kort: "Diepe RVS spoelbak om in te bouwen of in te lassen in een werkblad.",
    beschrijving:
      "Spoelbakken op maat voor inbouw in bestaande of nieuwe werkbladen. Afgeronde hoeken voor eenvoudige reiniging en een afvoer op de door u gewenste positie.",
    specs: [
      ["Materiaal", "RVS 304"],
      ["Afmetingen", "Op maat, standaarddiepte 300 mm"],
      ["Montage", "Inbouw of ingelast"],
    ],
    opties: ["Overloop", "Afvoerplug met korf", "Geluiddemping onderzijde"],
  },
  {
    id: "werkblad-rvs",
    naam: "RVS werkblad",
    categorie: "horeca",
    kort: "Naadloos werkblad in roestvrij staal, inclusief uitsparingen en opstanden.",
    beschrijving:
      "Werkbladen voor professionele keukens, laboratoria en werkplaatsen. We verwerken uitsparingen voor kookplaten, spoelbakken en apparatuur direct in het blad, zodat u een naadloos en hygiënisch geheel krijgt.",
    specs: [
      ["Materiaal", "RVS 304 / 316"],
      ["Afmetingen", "Op maat, ook in hoekopstelling"],
      ["Kern", "Optioneel verstevigd met multiplex of honingraat"],
    ],
    opties: ["Uitsparingen voor inbouwapparatuur", "Achteropstand", "Waterkering", "Afgeronde voorkant"],
  },
  {
    id: "inbouw-kookplaat",
    naam: "Inbouwframe kookplaat",
    categorie: "horeca",
    kort: "Inbouw van kookplaten en apparatuur in een op maat gemaakt RVS blok.",
    beschrijving:
      "Wij maken en monteren inbouwkookplaten en de bijbehorende frames en kookblokken. Perfect passend rond uw apparatuur, met aandacht voor ventilatie en bereikbaarheid voor onderhoud.",
    specs: [
      ["Materiaal", "RVS 304"],
      ["Geschikt voor", "Gas, inductie, bakplaat, frituur"],
      ["Montage", "Inclusief plaatsing op locatie"],
    ],
    opties: ["Kookeiland", "Onderkasten", "Lades", "Ventilatieroosters"],
  },
  {
    id: "afzuigkap",
    naam: "Afzuigkap op maat",
    categorie: "horeca",
    kort: "Wand- of eilandafzuigkap in RVS, afgestemd op uw kookopstelling.",
    beschrijving:
      "Professionele afzuigkappen voor horeca en grootkeuken, als wandmodel of eilandmodel. Uitgevoerd met vetvangfilters en vetgoot, en passend gemaakt op de afmetingen van uw kooklijn.",
    specs: [
      ["Materiaal", "RVS 304"],
      ["Type", "Wand- of eilandmodel"],
      ["Filters", "Uitneembare RVS vetvangfilters"],
    ],
    opties: ["Verlichting", "Vetgoot met aftapkraan", "Aansluiting op bestaand kanaal"],
  },
  {
    id: "werktafel-onderplank",
    naam: "Werktafel met onderplank",
    categorie: "horeca",
    kort: "Stevige RVS werktafel voor keuken, productie of magazijn.",
    beschrijving:
      "Vrijstaande werktafels met onderplank, op maat gemaakt. Ideaal als voorbereidingstafel in keukens of als inpaktafel in productieomgevingen.",
    specs: [
      ["Materiaal", "RVS 304"],
      ["Afmetingen", "Op maat"],
      ["Belasting", "Afhankelijk van uitvoering, in overleg"],
    ],
    opties: ["Achteropstand", "Lades", "Zwenkwielen met rem", "Tweede onderplank"],
  },
  {
    id: "transportband-frame",
    naam: "Machineframe & transportband",
    categorie: "industrie",
    kort: "Frames en onderdelen voor productielijnen in de voedingsindustrie.",
    beschrijving:
      "Wij ontwikkelen en bouwen machines en machineonderdelen voor de food- en non-foodindustrie. Van stevige RVS frames tot complete transportbanden, hygiënisch ontworpen en eenvoudig te reinigen.",
    specs: [
      ["Materiaal", "RVS 304 / 316, staal verzinkt of gecoat"],
      ["Ontwerp", "In overleg, eigen engineering"],
      ["Toepassing", "Food & non-food"],
    ],
    opties: ["Hygiënisch ontwerp", "Montage op locatie", "Aanpassing bestaande lijnen"],
  },
  {
    id: "doseertrechter",
    naam: "Trechters & bunkers",
    categorie: "industrie",
    kort: "Doseer- en opvangtrechters in RVS voor productieprocessen.",
    beschrijving:
      "Trechters, bunkers en opvangbakken voor het doseren en verwerken van grondstoffen. Gemaakt naar tekening of in overleg ontworpen voor uw proces.",
    specs: [
      ["Materiaal", "RVS 304 / 316"],
      ["Afmetingen", "Naar tekening"],
      ["Afwerking", "Geborsteld of gebeitst en gepassiveerd"],
    ],
    opties: ["Schuifafsluiter", "Deksel", "Inspectieluik"],
  },
  {
    id: "machinebehuizing",
    naam: "Machinebehuizing & kappen",
    categorie: "industrie",
    kort: "Beschermkappen en behuizingen voor machines en installaties.",
    beschrijving:
      "Plaatwerk behuizingen en beschermkappen om machines, elektronica en bewegende delen veilig af te schermen. Inclusief deuren, scharnieren en ventilatie-openingen waar nodig.",
    specs: [
      ["Materiaal", "RVS, aluminium of staal"],
      ["Bewerking", "Knippen, zetten, lassen, afwerken"],
    ],
    opties: ["Inspectiedeuren", "Ventilatiesleuven", "Poedercoating in RAL-kleur"],
  },
  {
    id: "koelcel-componenten",
    naam: "Componenten koelinstallaties",
    categorie: "koeltechniek",
    kort: "Plaatwerk en frames voor industriële koel- en klimaatinstallaties.",
    beschrijving:
      "Vervaardiging van onderdelen voor machines en apparaten voor industriële koeltechniek en klimaatregeling, zoals montageframes, condensbakken, omkastingen en beugels.",
    specs: [
      ["Materiaal", "RVS, verzinkt staal, aluminium"],
      ["Toepassing", "Koeling, vriezing, klimaatregeling"],
    ],
    opties: ["Condensbakken met afvoer", "Montageframes", "Kanaalwerk"],
  },
  {
    id: "luchtkanaal",
    naam: "Kanalen & roosters",
    categorie: "koeltechniek",
    kort: "Lucht- en afvoerkanalen op maat, inclusief roosters en overgangsstukken.",
    beschrijving:
      "Kanaalwerk voor ventilatie, afzuiging en klimaatbeheersing. We maken rechte delen, bochten en verloopstukken precies passend voor uw situatie.",
    specs: [
      ["Materiaal", "RVS of verzinkt staal"],
      ["Vorm", "Rond of rechthoekig"],
    ],
    opties: ["Inspectieluiken", "Regelkleppen", "Roosters"],
  },
  {
    id: "maatwerk-constructie",
    naam: "Maatwerk metaalconstructie",
    categorie: "constructie",
    kort: "Plaatwerk en constructies helemaal naar uw tekening of idee.",
    beschrijving:
      "Met ruime ervaring in plaatwerk en metaalconstructies maken we vrijwel alles op maat: van beugels en kasten tot complete constructies. U levert een tekening of een idee, wij denken mee en voeren uit.",
    specs: [
      ["Materiaal", "RVS, staal, aluminium"],
      ["Bewerkingen", "Knippen, zetten, walsen, lassen (TIG/MIG), slijpen"],
      ["Oplage", "Enkelstuks en kleine series"],
    ],
    opties: ["Eigen ontwerp & engineering", "Montage op locatie", "Poedercoating"],
  },
  {
    id: "trap-bordes",
    naam: "Bordessen, trappen & leuningen",
    categorie: "constructie",
    kort: "Werkbordessen, trappen en leuningen voor bedrijf en industrie.",
    beschrijving:
      "Veilige toegang tot machines en installaties met bordessen, trappen en leuningen op maat, in RVS of gegalvaniseerd staal.",
    specs: [
      ["Materiaal", "RVS of thermisch verzinkt staal"],
      ["Afmetingen", "Op maat"],
    ],
    opties: ["Antislip roosters", "Kantplanken", "Hekwerk"],
  },
  {
    id: "kunstobject",
    naam: "Kunst- & designobjecten",
    categorie: "design",
    kort: "Exclusieve objecten in metaal, in samenwerking met kunstenaars en ontwerpers.",
    beschrijving:
      "Naast industrieel werk vervaardigen we exclusieve kunst- en designobjecten. We werken nauw samen met kunstenaars, architecten en ontwerpers om hun idee om te zetten in een duurzaam object van metaal.",
    specs: [
      ["Materiaal", "RVS, cortenstaal, messing, aluminium"],
      ["Afwerking", "Spiegelglans, geborsteld, patina of gecoat"],
    ],
    opties: ["Binnen- en buitenobjecten", "Sokkels en bevestiging", "Plaatsing"],
  },
  {
    id: "design-meubel",
    naam: "Designmeubels in metaal",
    categorie: "design",
    kort: "Tafels, balies en interieurelementen in RVS of staal.",
    beschrijving:
      "Unieke meubels en interieurelementen, zoals bars, balies, tafelonderstellen en wandpanelen. Eén voor één met de hand afgewerkt.",
    specs: [
      ["Materiaal", "RVS, staal, messing"],
      ["Afmetingen", "Op maat"],
    ],
    opties: ["Combinatie met hout of natuursteen", "Verlichting geïntegreerd"],
  },
];
