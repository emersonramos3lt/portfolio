const mainMenu = document.getElementById("mainMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const content = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

content.forEach(item => {
    item.addEventListener("click", function() {
        close();
    })
});

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.opacity = 1;
    mainMenu.style.pointerEvents = "all";
}

function close() {
    mainMenu.style.opacity = "0";
    mainMenu.style.pointerEvents = "none";
}

const words = ['Olá seja bem vindo! Eu sou Emerson'];

words.forEach(word => {
    let textTimeline = gsap.timeline({
        yoyo: false
    })
    textTimeline.to('#typewriter', {
        text: word,
        duration: 3
    })
});











// -------- DARK MODE ------------
const check = document.getElementById("dark-mode");

check.addEventListener("change", function() {

    if (this.checked) {
        enableDark();
    }

    else {
        enableLight();
    }
});

function enableDark() {
    document.body.classList.remove("light"); // Remove light e add dark
    document.body.classList.add("dark");
}

function enableLight() {
    document.body.classList.remove("dark"); // Remove dark e add light
    document.body.classList.add("light");
}









// --------- LINK -------------
const myLink = document.getElementById("myLink");

myLink.addEventListener("mouseover", function() {
    myLink.style.backgroundColor = "#fff"
    myLink.style.color = "#111"
    document.getElementById('myLink').innerHTML = `Ir para o GitHub <i class="fa-solid fa-arrow-up-right-from-square"></i>`
});

myLink.addEventListener("mouseout", function() {
    myLink.style.backgroundColor = "#111"
    myLink.style.color = "#fff"
    myLink.textContent = "Ver mais projetos"
});