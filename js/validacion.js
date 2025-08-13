function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function () {
  let pass1 = document.getElementById("password1").value;
  let pass2 = document.getElementById("password2").value;

  if (pass1 === pass2 && pass1.trim() !== "") {
    showAlertSuccess();
  } else {
    showAlertError();
  }
});
