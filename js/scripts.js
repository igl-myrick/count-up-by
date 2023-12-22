function calculateResult(num1, num2) {
  let resultArr = [];
  let numSign1 = Math.sign(num1);
  let numSign2 = Math.sign(num2);
  if (isNaN(num1) || isNaN(num2)) {
    return "Both inputs must be numbers.";
  } else if (num2 > num1) {
    return "The first number must be larger than the second.";
  } else if ((numSign1 === 0 || numSign2 === 0) || (numSign1 === -1 || numSign2 === -1)) {
    return "Both numbers must be positive.";
  } else {  
    for (let i = num2; i <= num1; i += num2) {
      resultArr.push(i);
    }
    return resultArr.join(", ");
  }
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
});

function handleForm(e) {
  e.preventDefault();
  let form = document.querySelector("form");
  let inputNum1 = parseInt(document.getElementById("firstNum").value);
  let inputNum2 = parseInt(document.getElementById("secondNum").value);
  const result = calculateResult(inputNum1, inputNum2);
  let p = document.createElement("p");
  p.append(result);
  let resultDiv = document.getElementById("results");
  resultDiv.append(p);
  form.addEventListener("submit", function() {
    p.remove();
  });
}