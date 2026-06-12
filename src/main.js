
const chevronBtn = document.querySelector(".menu-icon");
const chevronMenu = document.querySelector(".menu-cours");

chevronBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    chevronMenu.classList.toggle('is-open');
});

document.addEventListener('click', (e) =>{
    if (!chevronMenu.contains(e.target) && e.target !== chevronBtn) {
        chevronMenu.classList.remove('is-open');
    }
});



