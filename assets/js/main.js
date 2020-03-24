document.querySelector('.menu-toggle').onclick = (e) => {
    document.querySelector('nav').classList.toggle('mobile');
    e.preventDefault();
};

const nav = document.querySelector("nav");
const sticky = nav.offsetTop;

const stickyToggle = () => {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};

window.onscroll = stickyToggle;