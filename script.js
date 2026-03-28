let index = 0;

function slide(direction) {
    const track = document.getElementById("sliderTrack");
    const videos = track.children;

    index += direction;

    if (index < 0) index = 0;
    if (index >= videos.length) index = videos.length - 1;

    const offset = index * 320;
    track.style.transform = `translateX(-${offset}px)`;
}

// Sticky shrink effect
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.padding = "8px 0";
    } else {
        header.style.padding = "15px 0";
    }
});

function orderNow() {
    alert("Redirect to order page");
}
