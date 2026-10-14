//1. select elements
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//check total number of <p>
console.log("Total paragraphs ", paragraphs.length);

//2. access element by index
// console.log("First paragraph: ", paragraphs[0]);
// console.log("First text: ", (paragraphs[0].textContent = "Hollo DOM"));

//button1
const showBtn = document.getElementById("showBtn");
showBtn.addEventListener("click", function () {
  for (let p of paragraphs) {
    console.log(p.textContent);
  }
});

//button2
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", function () {
  paragraphs[0].textContent = "HTML5";
  paragraphs[1].textContent = "CSS3";
  paragraphs[2].textContent = "JavaScript DOM";
  paragraphs[3].textContent = "Master React JS";
});

//button3
const styleBtn = document.getElementById("styleBtn");
styleBtn.addEventListener("click", function () {
  for (let p of paragraphs) {
    p.style.fontSize = "20px";
    p.style.fontWeight = "bold";
  }
});

//reset
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function () {
  //reset text
  paragraphs[0].textContent = "HTML";
  paragraphs[1].textContent = "CSS";
  paragraphs[2].textContent = "JavaScript";
  paragraphs[3].textContent = "React JS";

  //reset style
  for (let p of paragraphs) {
    p.style.fontSize = "";
    p.style.fontWeight = "";
  }
});
