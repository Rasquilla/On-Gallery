
document.addEventListener('click', function (event) {
  const button = event.target.closest('button[data-link]');
  if (!button) return;
  const link = button.getAttribute('data-link');
  if (link) window.location.href = link;
});
