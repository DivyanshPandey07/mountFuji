const logo = document.querySelector('.ham');
const nav = document.querySelector('.navbar');
const showBg = document.querySelector('.logo_navbar');
const closeBtn = document.querySelector('.closeImg');
console.log(closeBtn)

//Events Listeners
logo.addEventListener('click', showNav);


//Functions
function showNav(e){
    nav.style.display = "block";
    showBg.style.background = "var(--secondary)";
    logo.src = "/unnamed.png"
    logo.addEventListener('click', ()=>{
        logo.src = "/grey-menu-icon-transparent-png-stickpng-menu-icon-png-2000_2000.png"
        nav.style.display = "none";
        showBg.style.background = "transparent";
    })
}

