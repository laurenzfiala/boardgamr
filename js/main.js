$(document).ready(function() {

  updateClock();
  setInterval(function() {updateClock()}, 1000);

});

function updateClock() {
  var date = new Date();
  $('#clock').text((date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()));
}
