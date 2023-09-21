let email = document.querySelector("input");
let para = document.querySelector(".waring");

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    para.innerHTML = "Please provide a valid email !";
    return false;
  } else {
    para.innerHTML = "";
    return true;
  }
});
