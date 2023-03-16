"use strict";

const hideImg = function (e) {
  const img = e.target;
  img.style.display === "none"
    ? (img.style.display = "block")
    : (img.style.display = "none");
};

const deleteImg = function (e) {
  const img = e.target;
  img.remove();
};

const respawnImages = function () {
  const img = document.querySelectorAll("img");
  img.forEach((img) => {
    img.style.display = "block";
  });
};
const allImages = document.querySelectorAll("img");
console.log(allImages);
allImages.forEach((img) => {
  img.addEventListener("click", hideImg);
});
allImages.forEach((img) => {
  img.addEventListener("dblclick", deleteImg);
});

document
  .querySelector(".btn--respawn")
  .addEventListener("click", respawnImages);
