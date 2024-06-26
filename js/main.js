let menuIcon = document.querySelector('#menu-icon');
letnavbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = winodw.scrollY;
        let offset = sec.offsetTop - 100;
        let heighet = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heighet) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
        
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); 

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
    