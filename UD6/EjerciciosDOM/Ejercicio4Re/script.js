"use strict";

const sortWords = function () {
  const ul = document.getElementsByTagName("ul")[0];
  const liArray = Array.from(ul.getElementsByTagName("li"));
  const sortedLiArray = liArray.sort((a, b) =>
    a.innerHTML.localeCompare(b.innerHTML)
  );
  sortedLiArray.forEach((li) => ul.appendChild(li));
};

document.querySelector(".btn--sort").addEventListener("click", sortWords);
