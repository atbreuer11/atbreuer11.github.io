$(document).foundation()


function resetSlider(element) {
  element.MaterialSlider.change(element.id);
}

$( document ).ready(function() {
  var dialog = document.querySelector('dialog');

  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }

  setTimeout(function() {
    dialog.showModal();
   }, 1000);

  dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
  });
});
