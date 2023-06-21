console.log("hello");
let inputUser;
document.querySelector(".myButton").addEventListener("click", function () {
  inputUser = document.querySelector(".myText").value;
  document.querySelector("h1").innerHTML = `Hello ${inputUser}`;
});
