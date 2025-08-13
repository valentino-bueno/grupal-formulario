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