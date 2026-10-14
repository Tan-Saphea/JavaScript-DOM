// console.log("JS is connected!!");

// let language = document.getElementsByName("language")[0];
// console.log(language);

//get button or select elements
let btn = document.getElementsByName("btnSubmit")[0];
let output = document.getElementsByName("output")[0];
let languages = document.getElementsByName("language");

// console.log(btn);
console.log(languages);

//button click
btn.addEventListener("click", () => {
  //get all radio buttons
  let language = document.getElementsByName("language");
  let select = false;

  languages.forEach((language) => {
    if (language.checked) {
      select = true;
      output.innerText = `You selected: ${language.value}`;
    }
  });
  if (select === false) {
    output.innerText = "Please selecte a progamming language.";
  }
});
