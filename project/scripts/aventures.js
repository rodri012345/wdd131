document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.getElementById("load-more");
    const adventureImages = document.querySelectorAll(".adventure.hidden");

    loadMoreBtn.addEventListener("click", function () {
        extraAdventures.classList.toggle("hidden");     
        if (extraAdventures.classList.contains("hidden")) {
            loadMoreBtn.textContent = "Load More Adventures";
        } else {
            loadMoreBtn.textContent = "Show Less Adventures";
        }
    });
});