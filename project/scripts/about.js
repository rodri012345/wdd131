document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.getElementById("read-more-btn");
    const extraInfo = document.getElementById("extra-info");

    readMoreBtn.addEventListener("click", function () {
        if (extraInfo.classList.contains("hidden")) {
            extraInfo.classList.remove("hidden");
            readMoreBtn.textContent = "Show Less";
        } else {
            extraInfo.classList.add("hidden");
            readMoreBtn.textContent = "Read More";
        }
    });
});
