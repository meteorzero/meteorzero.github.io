window.addEventListener("load", onload);
document.querySelector(".header__toggler").addEventListener("click", toggle);


function closePreloader() {
    let preloader = document.querySelector(".preloader");
    preloader.addEventListener("animationend", () => {
        preloader.classList.replace("-hiding", "-hidden");
    });
    preloader.classList.add("-hiding");
}

function onload() {
    closePreloader();
}

function toggle(event) {
    let toggler = event.currentTarget;
    toggler.classList.toggle("-active");
    toggler.parentNode.querySelector(".header__nav").classList.toggle("-open");
    toggler.parentNode.querySelector(".header__media").classList.toggle("-open");
}