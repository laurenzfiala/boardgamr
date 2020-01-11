$(document).ready(function() {

  $.i18n().load({
    'en': 'i18n/en.json',
    'de': 'i18n/de.json'
  }).done(() => {
    $('html').i18n();
  });

});
