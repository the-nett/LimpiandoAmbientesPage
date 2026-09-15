document.querySelectorAll('[data-ba]').forEach(function (el) {
  var range = el.querySelector('.ba-range');
  range.addEventListener('input', function () {
    el.style.setProperty('--pos', range.value + '%');
  });
});

(function () {
  var video = document.getElementById('procesoVideo');
  var overlay = document.getElementById('videoPlay');
  overlay.addEventListener('click', function () {
    overlay.hidden = true;
    video.controls = true;
    video.play();
  });
})();
