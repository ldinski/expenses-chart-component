const dayEl = document.querySelector(".data");
let el = document.querySelectorAll(".column");
let colVal = document.getElementById("columnval");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

el.addEventListener("mouseenter", function (opacityChanger) {
  colVal.classList.add("column-value-opacity");
});

el.addEventListener("mouseleave", function (opacityReverter) {
  el.classList.remove(".column-value-opacity");
});
