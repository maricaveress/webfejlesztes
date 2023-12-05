/*document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        this.classList.toggle('open');
    });
});*/


/*ötletek:
- űrlap kérdéseit értékeli ki egyből

*/



$(document).ready(function () {
    $("#feliratkozas").validate({
        rules: {
            knev: "required",
            email1: {
                required: true,
                email: true,
            },
            email2: {
                required: true,
                email: true,
            },
            feltetelek: "required",
        },
        messages: {
            knev: "Add meg a neved!",
            email1: "Add meg az email címed!",
            email2:"Add meg az email címed még egyszer!",
        },

    });
});