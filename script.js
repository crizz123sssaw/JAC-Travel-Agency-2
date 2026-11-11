
// JAC TRAVEL AGENCY
// Main JavaScript functionality

document.addEventListener("DOMContentLoaded", () => {

    // MOBILE NAVIGATION
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("active");

        const isOpen = navigation.classList.contains("active");

        menuButton.textContent = isOpen ? "✕" : "☰";
        menuButton.setAttribute("aria-expanded", isOpen);
    });

    // CLOSE MENU AFTER CLICKING A LINK
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("active");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        });
    });

    // AUTOMATIC FOOTER YEAR
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // BACK TO TOP BUTTON
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // SMOOTH NAVIGATION
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});
