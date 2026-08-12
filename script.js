document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".left-image, .right-image, #home > h1, #home > p, #home > h2, #home > a"
    );

    elements.forEach((element) => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
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
            rootMargin: "0px 0px -40px 0px"
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach((link) => {

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.style.color = "#d6a85f";
        }

    });

    const heroImage = document.querySelector("#home > img");

    if (heroImage) {

        window.addEventListener("scroll", () => {

            const scroll = window.scrollY;

            if (scroll < 600) {
                heroImage.style.transform =
                    `translateY(${scroll * 0.08}px) scale(1.01)`;
            }

        });

    }

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
