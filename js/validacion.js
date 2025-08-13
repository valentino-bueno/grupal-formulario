function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
  document.getElementById("alert-danger").classList.remove("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
  document.getElementById("alert-success").classList.remove("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const regBtn   = document.getElementById("regBtn");
  const termsEl  = document.getElementById("terminos");
  const pass1El  = document.getElementById("password1");
  const pass2El  = document.getElementById("password2");

  regBtn?.addEventListener("click", (e) => {
    // Evitá que se envíe el form si el botón es type="submit"
    e.preventDefault?.();

    const pass1 = pass1El?.value.trim() || "";
    const pass2 = pass2El?.value.trim() || "";
    const termsAccepted = !!termsEl?.checked;

    // 1) Largo mínimo
    if (pass1.length < 6 || pass2.length < 6) {
      showAlertError();
      return;
    }

    // 2) Contraseñas iguales
    if (pass1 !== pass2) {
      showAlertError();
      return;
    }

    // 3) Términos aceptados
    if (!termsAccepted) {
      showAlertError();
      return;
    }

    // Todo OK
    showAlertSuccess();
  });
});
