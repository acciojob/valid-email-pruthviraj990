function validEmail(str) {
  if (!str) return false;

  const regex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(str);
}

function checkEmail() {
  const input = document.getElementById('emailInput').value.trim();
  const result = document.getElementById('result');

  if (validEmail(input)) {
    result.textContent = "Valid Email ✅";
    result.style.color = "green";
  } else {
    result.textContent = "Invalid Email ❌";
    result.style.color = "red";
  }
}
