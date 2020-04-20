window.addEventListener("load", () => {
    let preloader = document.querySelector(".preloader");
    preloader.addEventListener("animationend", () => {
        preloader.classList.remove("closing");
        preloader.classList.add("closed");
    });
    preloader.classList.add("closing");
});