const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("colors_btn");
const color = document.querySelector(".color");
let previousHexColor = null;

btn.addEventListener("click", function () {
  let hexColor = null;

  do {
    hexColor = `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, 0)}`;
  } while (hexColor === previousHexColor);

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
