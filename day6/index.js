
function search() {
  const e = document.getElementById('search-input');
  e.classList.toggle('hide');
}

function extraPanel() {
  const mainPanel = document.getElementById('panel');
  const extraPane = document.getElementById('extra-panel');
  mainPanel.classList.toggle('move-right');
  extraPane.classList.toggle('move-left');
}