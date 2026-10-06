document.addEventListener('DOMContentLoaded', function () {
  // Mobiel menu
  var toggle = document.querySelector('[data-menu-toggle]');
  var nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Zoekbalk
  var searchToggle = document.querySelector('[data-search-toggle]');
  var searchBar = document.querySelector('[data-search-bar]');
  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', function () {
      var open = searchBar.classList.toggle('is-open');
      searchToggle.setAttribute('aria-expanded', String(open));
      if (open) searchBar.querySelector('input').focus();
    });
  }

  // Productgalerij
  document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
    var main = gallery.querySelector('[data-gallery-main]');
    gallery.querySelectorAll('[data-gallery-thumb]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        main.src = btn.dataset.src;
        main.srcset = '';
        main.alt = btn.dataset.alt || '';
        gallery.querySelectorAll('[data-gallery-thumb]').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
      });
    });
  });

  // Contactformulier: product uit de link (?product=Naam) vooraf invullen
  var productField = document.querySelector('[data-contact-product]');
  if (productField) {
    var product = new URLSearchParams(window.location.search).get('product');
    if (product && !productField.value) {
      productField.value = product;
      var body = document.querySelector('[data-contact-body]');
      if (body && !body.value) body.value = 'Graag ontvang ik een offerte voor: ' + product + '\n\nGewenste afmetingen / aantal / levertermijn:\n';
    }
  }

  // Sortering in collecties
  document.querySelectorAll('[data-sort]').forEach(function (select) {
    select.addEventListener('change', function () {
      var url = new URL(window.location.href);
      url.searchParams.set('sort_by', select.value);
      url.searchParams.delete('page');
      window.location.href = url.toString();
    });
  });
});
