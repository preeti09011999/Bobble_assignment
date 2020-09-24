function eyeToggler(y) {
    var x = document.getElementById("InputPassword1");
    if (x.type === "password") {
        x.type = "text";
        y.classList.toggle("fa-eye-slash");
    } else {
        x.type = "password";
    }
}