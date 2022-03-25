const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const navLinks =  document.querySelectorAll('.nav-links li')
// toggle nav
burger.addEventListener('click', () => {
    nav.classList.toggle('active')

// animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else{
            link.style.animation = `navlinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
// burger animation
    burger.classList.toggle('toggle')
    
});
