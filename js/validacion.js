function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function () {
    let password1 = document.getElementById("password1").value.trim();

if (password1.length < 6) {
         showAlertError();
        return;
}
});

document.getElementById("regBtn").addEventListener("click", function () {
    let password2 = document.getElementById("password2").value.trim();

if (password2.length < 6) {
         showAlertError();
        return;
}
});