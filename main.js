const cardsContainer = document.getElementById('cardsContainer');
const btnApp = document.getElementById('btnApp');
const btnDesign = document.getElementById('btnDesign');
const btnWeb = document.getElementById('btnWeb');
var node = document.getElementById('cardsConteiner')
if (node.parentNode){
  node.parentNode.removeChild(node)
}

btnApp.addEventListener('click', () => {
  cardsContainer.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card 1</h5>
        <p class="card-text">Conteúdo do Card 1.</p>
      </div>
    </div>
  `;
});

btnDesign.addEventListener('click', () => {
  cardsContainer.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card 2</h5>
        <p class="card-text">Conteúdo do Card 2.</p>
      </div>
    </div>
  `;
});

btnWeb.addEventListener('click', () => {
  cardsContainer.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card 3</h5>
        <p class="card-text">Conteúdo do Card 3.</p>
      </div>
    </div>
  `;
});