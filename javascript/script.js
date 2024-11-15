// Responsive Menu
const mainMenu = document.getElementById("mainMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document
.getElementById("closeMenu");
const items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

items.forEach(item => {
    item.addEventListener("click", function() {
        close();
    });
});

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
    document.body.style.overflow = "hidden";
}

function close() {
    mainMenu.style.top = "-110%"
    document.body.style.overflow = "auto";
}

// Switch light/dark mode 
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
});