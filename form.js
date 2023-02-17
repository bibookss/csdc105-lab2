const isValidPassword = () => {
    const pass = document.getElementById("password").value;
    if (pass.length < 8) {
        document.getElementById("passMessage").innerHTML = "Password must be at least 8 characters.";
        return false;
    } else {
        document.getElementById("passMessage").innerHTML = "";
        return true;
    }
}

const isValidAge = () => {
    const birthDate = new Date(document.getElementsByName("birthdate").value);
    const ageDate = new Date(Date.now() - birthDate.getTime());

    if (Math.abs(ageDate.getUTCFullYear() - 1970) < 21) {
        document.getElementById("ageMessage").innerHTML = "Minors are not allowed!";
        return false;
    } else {
        document.getElementById("ageMessage").innerHTML = "";
        return true;
    }
}

const validateForm = () => {
    const pass = isValidPassword();
    const age = isValidAge();

    if (pass && age) {
        document.getElementById("formMessage").innerHTML = "Hooray! Your account has been successfully created.";
    } else {
        document.getElementById("formMessage").innerHTML = "";
    }
}