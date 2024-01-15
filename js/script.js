
function init() {
    includeHTML();
    let menu = document.getElementById('menu');
    console.log('menu element', menu);

    if (menu) {
        openMenu();
        console.log('openMenu() called');
    } else {
        console.log('menu element not found');
    }
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