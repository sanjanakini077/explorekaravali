document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(
        ".place-card, .place-card-large, .food-card, .info-block, .feature-section"
    );

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    elements.forEach(function (element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        observer.observe(element);
    });
});
