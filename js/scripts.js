function calculateResult(num1, num2) {
  let resultArr = [];
  for (let i = num2; i <= num1; i += num2) {
    resultArr.push(i);
  }
  return resultArr;
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
});

function handleForm(e) {
  e.preventDefault();
  let num1 = parseInt(document.getElementById("firstNum").value);
  let num2 = parseInt(document.getElementById("secondNum").value);
  const result = calculateResult(num1, num2)
  let p = document.createElement("p");
  p.append(result);
  let resultDiv = document.getElementById("results");
  resultDiv.append(p);
}