(function() {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const container = document.querySelector(".container");

    left.addEventListener("mouseenter", () => {
        container.classList.add("hover-left");
    });

    left.addEventListener("mouseleave", () => {
        container.classList.remove("hover-left");
    });

    right.addEventListener("mouseenter", () => {
        container.classList.add("hover-right");
    });

    right.addEventListener("mouseleave", () => {
        container.classList.remove("hover-right");
    });
})();

(function() {
    let projectLinks = [
        "https://pokemon-kpnamfbkce.now.sh",
        "https://starter-kits-pxwlglhegg.now.sh",
        "https://github.com/BH0/snowfall"
    ];

    let viewProjectLink = document.getElementById("view-project-link");
    let showcaseImage = document.getElementById("showcase-image");

    let thumbnails = document.querySelectorAll('#thumbnail');

    thumbnails.forEach(function(element, index) {
        element.addEventListener("click", (e) => {
            if (e.target.parentElement.classList == "nested-one") {
                    showcaseImage.src = e.target.src;
                    e.target.classList.toggle("image-being-viewed");
                    viewProjectLink.href = projectLinks[0];
                    // alert(viewProjectLink.href);
            }
            if (e.target.parentElement.classList == "nested-two") {
                    showcaseImage.src = e.target.src;
                    e.target.classList.toggle("image-being-viewed");
                    viewProjectLink.href = projectLinks[1];
                    // alert(viewProjectLink.href);
            }
            if (e.target.parentElement.classList == "nested-three") {
                    showcaseImage.src = e.target.src;
                    e.target.classList.toggle("image-being-viewed");
                    viewProjectLink.href = projectLinks[2];
                    // alert(viewProjectLink.href);
            }

        });
    });
})();
