const openMenu = document.getElementsByClassName('open-menu');
const closeMenu = document.getElementsByClassName('close-menu');
const sideMenu = document.getElementsByClassName('side-menu');
const overlay = document.getElementsByClassName('overlay');
const images = document.getElementsByTagName("img");

function changeMenu(){
    sideMenu[0].style.right = "-100%";
    overlay[0].style.display = "none";
}

function openSlider(){
    sideMenu[0].style.right = "0";
    overlay[0].style.display = "block";
}

// clicking the overlay should also close the side-menu
overlay[0].addEventListener("click", ()=>{
    changeMenu();
})
