function init() {
    includeHTML();
    openMenu();
}


function openMenu() {
    let menu = document.getElementById('menu');
    let menubar = document.getElementById('menu-bar');
    let close = document.getElementById('close-button');
    menu.addEventListener("click", () => {
        menubar.classList.toggle('d-none');
    });
    close.addEventListener("click", () => {
        menubar.classList.toggle('d-none');
    })
}