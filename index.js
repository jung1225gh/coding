const a = document.querySelector("#input-a");
const b = document.querySelector("#input-b");
const plusForm = document.querySelector("#plus-form");

plusForm.addEventListener("submit", plus);

function plus(event) {
  event.preventDefault();
  console.log(Number(a.value) + Number(b.value));
}


const c = document.querySelector("#input-c");
const d = document.querySelector("#input-d");
const minusForm = document.querySelector("#minus-form");

minusForm.addEventListener("submit", minus);

function minus(event) {
  event.preventDefault();
  console.log(Number(c.value) - Number(d.value));
}


const e = document.querySelector("#input-e");
const f = document.querySelector("#input-f");
const multipleForm = document.querySelector("#multiple-form");

multipleForm.addEventListener("submit", multiple);

function multiple(event) {
  event.preventDefault();
  console.log(Number(e.value) * Number(f.value));
}


const g = document.querySelector("#input-g");
const h = document.querySelector("#input-h");
const divideForm = document.querySelector("#divide-form");

divideForm.addEventListener("submit", divide);

function divide(event) {
  event.preventDefault();
  console.log(Number(g.value) / Number(h.value));
}
// const input_first = document.querySelector("#input-first")

// function showInput() {
//     console.log(this.value)
// }

// input_first.addEventListener('change', showInput)