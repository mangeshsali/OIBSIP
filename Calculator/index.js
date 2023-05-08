let input = "";
let dotReset = true;
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerText == "=") {
      input = eval(input);
      document.querySelector(".input").value = input;
    } else if (event.target.innerText == "AC") {
      input = "";
      document.querySelector(".input").value = input;
    } else if (event.target.innerText == "←") {
      input = input.slice(0, -1);
      document.querySelector(".input").value = input;
    } else if (event.target.innerText == ".") {
      if (input.innerText == ".") {
        if (dotReset) {
          if (input.valueOf != "") {
            input.valueOf += ".";
            dotReset = false;
          }
        }
      }
    } else {
      console.log(event.target);
      input = input + event.target.innerText;
      document.querySelector(".input").value = input;
    }
  });
});
