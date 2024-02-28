window.sr = ScrollReveal ({reset: true});

sr.reveal('p', {duration: 1200});

const chk = document.getElementById('chk')
const isDarkmode = localStorage.getItem('darkMode') === 'true'

if (isDarkmode) {
    document.body.classList.add('dark')
    chk.checked = true
}

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    localStorage.setItem('darkMode', chk.checked)
})