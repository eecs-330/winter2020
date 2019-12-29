document.querySelector('.menu-toggle').onclick = (e) => {
    document.querySelector('nav').classList.toggle('mobile');
    e.preventDefault();
};
