document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.getElementById("load-more");
    const extraAdventures = document.getElementById("extra-adventures");

    loadMoreBtn.addEventListener("click", function () {
        if (extraAdventures.classList.contains("hidden")) {
            extraAdventures.classList.remove("hidden");
            loadMoreBtn.textContent = "Show Less Adventures";
        } else {
            extraAdventures.classList.add("hidden");
            loadMoreBtn.textContent = "Load More Adventures";
        }
    });
});
