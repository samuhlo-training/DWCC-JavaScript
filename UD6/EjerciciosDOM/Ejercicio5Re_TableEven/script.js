"use strict";

const table = document.createElement("table");
for (let i = 0; i < 50; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < 50; j++) {
    const td = document.createElement("td");
    const number = i * 50 + j + 1;
    td.textContent = number;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.body.appendChild(table);

const highlightEven = function () {
  const tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    parseInt(td.textContent) % 2 === 0
      ? (td.style.backgroundColor = "rgb(168, 60, 127)")
      : (td.style.backgroundColor = "white");
  });
};

document.querySelector(".btn--pares").addEventListener("click", highlightEven);
