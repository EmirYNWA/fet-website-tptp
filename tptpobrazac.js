// document.getElementById('contactForm').addEventListener('submit', function(event)) {
//     event.preventDefault(); // Spriječi defaultno slanje forme

//     let name = document.getElementById('name').value.trim();
//     let phone = document.getElementById('phone').value.trim();
//     let email = document.getElementById('email').value.trim();
//     let message = document.getElementById('message').value.trim();
//     let validationMessage = document.getElementById('validation-message');

//     if (name === '' || phone === '' || email === '' || message === '') {
//         validationMessage.textContent = "Niste ispravno popunili sva polja.";
//         return;
//     }
// }

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