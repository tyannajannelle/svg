window.onload = function() {
  window.setTimeout(fadeout, 4000);
}

function fadeout() {
  document.getElementById('svg-icon').style.opacity = '0';
  document.getElementById('svg-icon2').style.opacity = '0';
}
