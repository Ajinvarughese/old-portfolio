document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





let clicked = 0
function close_menu(){
    clicked = 1
    document.getElementById("menu-bar").style.left = "110%";   
}







function open_menu() {

    if (clicked === 1) {

        document.getElementById("menu-bar").style.left = "0%";      
    }
}


