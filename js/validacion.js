function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}


document.addEventListener("DOMContentLoaded", function() {
  const regBtn = document.getElementById("regBtn");

  regBtn.addEventListener("click", function() {
    const termsAccepted = document.getElementById("terminos").checked;

    if (termsAccepted) {
      showAlertSuccess(); // Checkbox marcado
    } else {
      showAlertError();   // Checkbox NO marcado
    }
  });
});

document.getElementById("regBtn").addEventListener("click", function () {
  let pass1 = document.getElementById("password1").value;
  let pass2 = document.getElementById("password2").value;

  if (pass1 === pass2 && pass1.trim() !== "") {
    showAlertSuccess();
  } else {
    showAlertError();
  }
});

