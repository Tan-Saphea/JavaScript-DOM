//select html elements
const title = document.getElementById("title");
const desc = document.getElementById("desc");

const changeBtn = document.getElementById("changeBtn");
const colorBtn = document.getElementById("colorBtn");
const resetBtn = document.getElementById("resetBtn");

//chage text
changeBtn.addEventListener("click", function () {
  title.textContent = "JavaScript DOM Changed";
  desc.textContent = "The text was change using JS";
});

//change color
colorBtn.addEventListener("click", function () {
  title.style.color = "#ff7070";
  desc.style.color = "#14a4f2";
});

//reset
resetBtn.addEventListener("click", function () {
  title.textContent = "Hello Dom";
  title.style.color = "#222";
  desc.textContent = "This is a simple JS Dom example";
  desc.style.color = "#555";
});
