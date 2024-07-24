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
    mainMenu.style.opacity = "1";
    mainMenu.style.pointerEvents = "all";
    document.body.style.overflow = "hidden";
}

function close() {
    mainMenu.style.opacity = "0"; 
    mainMenu.style.pointerEvents = "none"
    document.body.style.overflow = "auto";
}

/*
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
*/


const words = ['Olá seja bem vindo! Eu me chamo Emerson 👋'];

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

/*
const check = document.getElementById("dark-mode");

check.addEventListener("change", function() {
    if (this.checked) {
        enableDark();
    } else {
        enableLight();
    }

    function enableDark() {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }

    function enableLight() {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
});
*/

const check = document.getElementById("dark-mode");

check.addEventListener("change", function() {

    if (this.checked) {
        enableDark();
    }

    else {
        enableLight();
    }

    function enableDark() {
        document.body.classList.add("dark");
        //document.body.classList.remove("light");
    }

    function enableLight() {
        //document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
});



// --------- LINK -------------
const myLink = document.getElementById("myLink");

myLink.addEventListener("mouseover", function() {
    myLink.style.backgroundColor = "#fff"
    myLink.style.color = "#111"
    document.getElementById('myLink').innerHTML = `Ir para o GitHub`
});

myLink.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "#111";
    event.target.style.color = "#fff";
    event.target.textContent = "Ver mais projetos";
});