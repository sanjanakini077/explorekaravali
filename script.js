document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const progress = document.querySelector(".scroll-progress");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }

    document.querySelectorAll(".nav-dropdown > a").forEach(link => {
        link.addEventListener("click", event => {

            if (window.innerWidth <= 750) {
                event.preventDefault();

                const dropdown = link.parentElement;

                dropdown.classList.toggle("open");
            }

        });
    });

    window.addEventListener("scroll", () => {

        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }

        if (progress) {
            const total =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const percent =
                total > 0
                    ? (window.scrollY / total) * 100
                    : 0;

            progress.style.width = percent + "%";
        }

    });

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold:0.12
            }
        );

    revealElements.forEach(element => {
        observer.observe(element);
    });

    const yearElements =
        document.querySelectorAll(".year");

    yearElements.forEach(element => {
        element.textContent =
            new Date().getFullYear();
    });

    document.querySelectorAll("a").forEach(link => {

        const href =
            link.getAttribute("href");

        if (
            href &&
            href.endsWith(".html") &&
            !href.startsWith("#") &&
            !href.startsWith("http")
        ) {

            link.addEventListener("click", event => {

                if (
                    event.ctrlKey ||
                    event.metaKey ||
                    event.shiftKey ||
                    event.altKey
                ) {
                    return;
                }

                event.preventDefault();

                document.body.style.transition =
                    "opacity .25s ease";

                document.body.style.opacity = "0";

                setTimeout(() => {
                    window.location.href = href;
                }, 250);

            });

        }

    });

});
