let btnContainer = document.querySelectorAll(".button-container");
let rowsContainer = document.querySelectorAll(".rows-calculator");
let display = document.querySelector(".display");
let symbole = [".", "+", "-", "*", "/", "=", "^2", ")"];

for (let i = 0; i < rowsContainer.length; i++) {
  rowsContainer[i].childNodes.forEach((e) => {
    e.addEventListener("click", () => {
      if (e.textContent == "DEL") {
        display.value = clearLastChar(display.value);
      } else if (e.textContent == "C") {
        clearDisplay(display);
      } else if (e.textContent == "=") {
        calculate(display);
      } else {
        display.value += e.textContent;
      }
    });
  });
}

const clearLastChar = (display) => {
  return display.substring(0, display.length - 1);
};

const clearDisplay = (display) => {
  display.value = "";
};

const calculate = (display) => {
  try {
    let calculate = math.evaluate(display.value);
    return (display.value = calculate);
  } catch {
    display.value = "";
    alert("invalid format");
  }
};
