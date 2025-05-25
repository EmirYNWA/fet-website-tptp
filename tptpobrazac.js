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
            const inputs = document.querySelectorAll(".contact-form input");

            inputs.forEach(input => {
                input.style.outline = "0.25px solid red";
            });
            validationMessage.textContent = "Niste ispravno popunili sva polja";
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