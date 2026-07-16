const loginPage = document.querySelector(".login-page");
const mainPage = document.getElementById("mainPage");
const error = document.getElementById("error");

function login() {

    const password = document
        .getElementById("password")
        .value
        .trim()
        .toLowerCase();

    if (
        password === "kalbimin tek sahibi" ||
        password === "kalbiminteksahibi"
    ) {

        loginPage.style.opacity = "0";

        setTimeout(() => {

            loginPage.style.display = "none";
            mainPage.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 700);

    } else {

        error.innerHTML = "❤️ Wrong password.";

    }

}

document
    .getElementById("password")
    .addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            login();

        }

    });
