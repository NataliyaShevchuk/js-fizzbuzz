const nBox = 8 * 8;
const tableContainerEl = document.querySelector(".table-container");
const numberBoxEl = document.getElementById('number-box');
const fizzBoxEl = document.getElementById('fizz');
const buzzBoxEl = document.getElementById('buzz');
const fizzBuzzBoxEl = document.getElementById('fizzbuzz')

for (let i = 0; i < nBox; i++){
    tableContainerEl.innerHTML += `<div class="square-box">${ i + 1 }</div>`;
}
