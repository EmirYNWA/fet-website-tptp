const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?\d+$/;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        console.log('Klikno Submit');
        e.preventDefault();
        console.log("Forma je pokušana poslati");

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const validationMessage = document.getElementById("validation-message");

        if (name === "" || phone === "" || email === "" || message === "") {
            const inputs = document.querySelectorAll(".contact-form input, textarea");

            inputs.forEach(input => {
                input.style.outline = "0.25px solid red";
            });
            validationMessage.textContent = "Sva polja moraju biti popunjena";
            return;
        }
        else if (!phoneRegex.test(phone)) {
            document.querySelectorAll(".contact-form #phone").forEach(input => {
                input.style.outline = "0.25px solid red";
            });
            validationMessage.textContent = "Broj telefona nije validan";
            return;
        }
        else if (!emailRegex.test(email)) {
            document.querySelectorAll(".contact-form #email").forEach(input => {
                input.style.outline = "0.25px solid red";
            });
            validationMessage.textContent = "E-Mail adresa nije validna";
            return;
        }

        validationMessage.textContent = ""; 
        this.submit();
    });
});

const scrollToTopLink = document.getElementById("scroll-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopLink.style.display = "block";
        } else {
            scrollToTopLink.style.display = "none";
        }
    });

    scrollToTopLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });