console.log("JS is running");
//select all element with calss = "course"
const courses = document.getElementsByClassName("course");
console.log(courses);
//select button
const changeBtn = document.getElementById("changeBtn");
const styleBtn = document.getElementById("styleBtn");
const resetBtn = document.getElementById("resetBtn");

//1. change btn
changeBtn.addEventListener("click", function () {
  courses[0].textContent = "HTML5";
  courses[1].textContent = "CSS3";
  courses[2].textContent = "JavaScript DOM";
  courses[3].textContent = "Master React JS";
});

//2. change style
styleBtn.addEventListener("click", function () {
  for (let c of courses) {
    c.style.backgroundColor = "lightBlue";
    c.style.fontSize = "24px";
    c.style.fontWeight = "bole";
  }
});

//3. resetBtn
resetBtn.addEventListener("click", function () {
  //text
  courses[0].textContent = "HTML";
  courses[1].textContent = "CSS";
  courses[2].textContent = "JavaScript";
  courses[3].textContent = "React JS";
  //style
  for (let c of courses) {
    c.style.backgroundColor = "";
    c.style.fontSize = "";
    c.style.fontWeight = "";
  }
});
