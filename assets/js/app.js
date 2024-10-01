const topBtn = document.querySelector(".topBtn")

window.addEventListener("scroll", function () {
    if (window.scrollY > 2000) {
        topBtn.classList.add("show")
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})
