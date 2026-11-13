var form = document.getElementById("calcForm");
var resultBox = document.getElementById("result");

function showResult(text, isError) {
  resultBox.textContent = text;
  resultBox.className = isError ? "result error" : "result";
}

function calculate() {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var op = document.getElementById("op").value;

  // Validation: both fields must be filled
  if (a === "" || b === "") {
    showResult("Please enter both numbers.", true);
    return;
  }

  a = parseFloat(a);
  b = parseFloat(b);

  var answer, symbol;

  switch (op) {
    case "add":
      answer = a + b;
      symbol = "+";
      break;
    case "sub":
      answer = a - b;
      symbol = "-";
      break;
    case "mul":
      answer = a * b;
      symbol = "x";
      break;
    case "div":
      if (b === 0) {
        showResult("Cannot divide by zero. Enter a second number other than 0.", true);
        return;
      }
      answer = a / b;
      symbol = "/";
      break;
  }

  // Round to avoid floating point errors (e.g. 0.1 + 0.2)
  answer = Math.round(answer * 1e10) / 1e10;

  showResult(a + " " + symbol + " " + b + " = " + answer, false);
}

// Calculate button (form submit)
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload
  calculate();
});

// Reset button
document.getElementById("resetBtn").addEventListener("click", function () {
  form.reset();
  showResult("Result will appear here.", false);
  document.getElementById("num1").focus();
});
