const firstname = document.getElementById("first-name");
const secondname = document.getElementById("last-name");
const email = document.getElementById("email-address");
const enquiry = document.getElementById("enquiry");
const support = document.getElementById("support");
const consent = document.getElementById("consent");
const validationbtn = document.getElementById("submit");
const msgerror = document.getElementById("errormessage");

validationbtn.addEventListener("click", () => {
  event.preventDefault();
  msgerror.textContent = "";

  if (
    !firstname.value.trim() ||
    !secondname.value.trim() ||
    !email.value.trim()
  ) {
    msgerror.textContent = "Para prosseguir preencha todos os campos!";
    return;
  }

  alert("Todos os campos preenchidos");
});

function validateemail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

email.addEventListener("blur", function () {
  const emailinput = email.value.trim();
  msgerror.textContent = "";
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (emailinput && !emailRegex.test(emailinput)) {
    msgerror.textContent = "Insira um email válido!";
  } else {
    msgerror.textContent = "";
  }
});
