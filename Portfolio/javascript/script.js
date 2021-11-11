let Toggle = document.querySelector(".navToggle");
Toggle.addEventListener("click", function() {
    let toggle = document.getElementById("toggle");
    if (toggle.style.display == "none") {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    }
});


// scroll icons //
const up = document.querySelector(".up");
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 550) {
        up.classList.add("none");
    } else {
        up.classList.remove("none");
    }
});