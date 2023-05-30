"use strict";

const createCB = function () {
  const container = document.getElementById("checkbox-container");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = Math.floor(Math.random() * 100);
  container.appendChild(checkbox);
  container.appendChild(document.createTextNode(" ")); // Espacio entre checkbox y el label
};

const markAll = function () {
  const checkboxes = document.querySelectorAll("input");
  checkboxes.forEach((checkbox) => {
    if (!checkbox.checked) {
      checkbox.checked = true;
    }
  });
};

const uncheckAll = function () {
  const checkboxes = document.querySelectorAll("input");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  });
};

document.querySelector(".btn--crear").addEventListener("click", createCB);
document.querySelector(".btn--marcar").addEventListener("click", markAll);
document.querySelector(".btn--desmarcar").addEventListener("click", uncheckAll);
