let container = document.querySelector(".container");
let calculatorRows = document.querySelector(".calculator-rows");
let display = document.querySelector("input");

container.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    if (e.target.textContent == "C") {
      clearDisplay();
    } else if (e.target.textContent == "=") {
      calculate();
    }
    writeInInput(e.target.textContent);
  }
});

const writeInInput = (value) => {
  display.value += value;
};

const clearDisplay = () => {
  display.value = "";
};

const calculate = () => {
  try {
    let calculation = math.evaluate(display.value);
    display.value = calculation
  } catch {
    display.value = "Invalide operation";
  }
};
