// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationOperations = document.querySelector(
  "#multiplication-operations"
); // Alterado para selecionar o elemento correto

// Funções de seleção de elementos
const createTable = (number, multiplicatorNumber) => {
  multiplicationOperations.innerHTML = ""; // Limpar o conteúdo anterior

  for (i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const template = `<div class="row">
        <div class="operation">${number} x ${i} =</div>
        <div class="result">${result}</div>
        </div>`;

    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const row = htmlTemplate.querySelector(".row");
    multiplicationOperations.appendChild(row); // Adicionado ao elemento correto
  }
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;

  createTable(multiplicationNumber, multiplicatorNumber);
});
