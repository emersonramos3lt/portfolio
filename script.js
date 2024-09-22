function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Typewriter animation
const words = ['HTML CSS', 'JavaScript', 'React', 'PHP', 'MySQL'];

let mainTimeline = gsap.timeline({
    repeat: -1
})

words.forEach(word => {

    let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1
    });

    textTimeline.to('#typewriter', {
        text: word,
        duration: 1
    });

    mainTimeline.add(textTimeline);
});