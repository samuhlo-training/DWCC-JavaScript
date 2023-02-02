"use strict";

function changeColor(color) {
  document.body.style.backgroundColor = `#${color}`;
}
function changeOpacity(num) {
  document.body.style.opacity = num;
}

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "1") {
    changeColor("e25267");
    changeOpacity(1);
  } else if (e.key === "2") {
    changeColor("529be2");
    changeOpacity(1);
  } else if (e.key === "3") {
    changeColor("eed03b");
    changeOpacity(1);
  } else {
    changeOpacity(0.1);
  }
});
