/* =========================================================
   EXPLORE KARAVALI — INTERACTION SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SCROLL REVEAL
       ========================= */

    const revealElements = document.querySelectorAll(
        ".left-image, .right-image, #home > h1, #home > p, #home > h2, #home > button"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =========================
       ACTIVE NAVIGATION
       ========================= */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            link.style.color = "#d6a85f";

            link.style.fontWeight = "700";
        }

    });


    /* =========================
       IMAGE PARALLAX EFFECT
       ========================= */

    const heroImage = document.querySelector("#home > img");

    if (heroImage) {

        window.addEventListener("scroll", () => {

            const scrollPosition = window.scrollY;

            if (scrollPosition < 600) {

                heroImage.style.transform =
                    `translateY(${scrollPosition * 0.08}px) scale(1.01)`;

            }

        });

    }


    /* =========================
       BUTTON RIPPLE EFFECT
       ========================= */

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {

        button.addEventListener("click", function (event) {

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            const size = Math.max(
                rect.width,
                rect.height
            );

            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;

            ripple.style.position = "absolute";
            ripple.style.borderRadius = "50%";

            ripple.style.background =
                "rgba(255,255,255,0.35)";

            ripple.style.left =
                `${event.clientX - rect.left - size / 2}px`;

            ripple.style.top =
                `${event.clientY - rect.top - size / 2}px`;

            ripple.style.transform = "scale(0)";

            ripple.style.pointerEvents = "none";

            ripple.style.animation =
                "rippleEffect 0.6s linear";

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });


    /* =========================
       SMOOTH PAGE TRANSITION
       ========================= */

    document.querySelectorAll("a").forEach((link) => {

        const href = link.getAttribute("href");

        if (
            href &&
            href.endsWith(".html") &&
            !href.startsWith("#")
        ) {

            link.addEventListener("click", (event) => {

                event.preventDefault();

                document.body.style.transition =
                    "opacity 0.35s ease";

                document.body.style.opacity = "0";

                setTimeout(() => {

                    window.location.href = href;

                }, 350);

            });

        }

    });

});


/* =========================
   RIPPLE ANIMATION
   ========================= */

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

@keyframes rippleEffect {

    to {
        transform: scale(4);
        opacity: 0;
    }

}

`;

document.head.appendChild(rippleStyle);
