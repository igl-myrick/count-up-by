function calculateResult(num1, num2) {
  let resultArr = [];
  let numSign1 = Math.sign(num1);
  let numSign2 = Math.sign(num2);
  if (num1 === "" || num2 === "") {
    return "You need to input two numbers."
  } else if (num1 === NaN || num2 === NaN) {
    return "You need to input two numbers."
  } else if (num2 >= num1) {
    return "The first number must be larger than the second."
  } else if ((numSign1 === 0 || numSign2 === 0) || (numSign1 === -1 || numSign2 === -1)) {
    return "Both numbers must be positive."
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
  let num1 = parseInt(document.getElementById("firstNum").value);
  let num2 = parseInt(document.getElementById("secondNum").value);
  const result = calculateResult(num1, num2)
  let p = document.createElement("p");
  p.append(result);
  let resultDiv = document.getElementById("results");
  resultDiv.append(p);
  form.addEventListener("submit", function() {
    p.remove();
  })
}