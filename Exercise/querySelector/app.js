//select
const studentName = document.querySelector("#studentName");
const desc = document.querySelector(".desc");
const nameInput = document.querySelector("#nameInput");
const changeNameBtn = document.querySelector("#changeNameBtn");
const changeColorBtn = document.querySelector("#changeColorBtn");
const hideTextBtn = document.querySelector("#hideTextBtn");
const resetBtn = document.querySelector("#resetBtn");

//1. Button changeNameBtn
changeNameBtn.addEventListener("click", function () {
  if (nameInput.value.trim() !== "") {
    studentName.textContent = nameInput.value.trim();
  }
});

//2. Button changeColorBtn
changeColorBtn.addEventListener("click", function () {
  studentName.style.color = "green";
  desc.style.color = "#6bba6b";
});

//3. Button hideTextBtn
hideTextBtn.addEventListener("click", function () {
  if (desc.style.display === "none") {
    desc.style.display = "block";
  } else {
    desc.style.display = "none";
  }
  if (studentName.style.display === "none") {
    studentName.style.display = "block";
  } else {
    studentName.style.display = "none";
  }
});

//4. Button resetBtn
resetBtn.addEventListener("click", function () {
  studentName.textContent = "Student Name";
  studentName.style.color = "black";
  studentName.style.display = "block";

  desc.style.color = "#666";
  desc.style.display = "block";

  nameInput.value = "";
});
