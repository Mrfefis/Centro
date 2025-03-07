let mediaQuery = window.matchMedia("(max-width: 768px)");

function desplegarMenu(){
    if (mediaQuery.matches) {
        const menu = document.querySelector(".menu");
        if (menu.style.display === "none")
            menu.style.display = "flex";
        else
            menu.style.display = "none";
    }
}

function desplegarSubMenu(numero){
    if (mediaQuery.matches) {
        const submenus = document.querySelectorAll(".submenu");
        numero--;
    
        if (submenus[numero].style.display !== "block") {
            submenus[numero].style.display = "block";
        }
        else {
            submenus[numero].style.display = "none";
        }
    }
}