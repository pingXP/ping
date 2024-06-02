//navbar
let menu=document.querySelector(".fas");
let navbar=document.querySelector(".navbar");
menu.onclick =() =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
window.onscroll =() =>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}
//個別顯示
var BeveragesShow = false;
var SnakesShow = false;
var BurgersShow = false;
function Burgers() {
    if(!BurgersShow) {
        BurgersShow = true;
        BeveragesShow = false;
        SnakesShow = false;
        document.getElementById('Burgerson').style.display='';
        document.getElementById('Beverageson').style.display='none';
        document.getElementById('Snakeson').style.display='none';
    }
}
function Beverages() {
    if(!BeveragesShow) {
        BurgersShow = false;
        BeveragesShow = true;
        SnakesShow = false;
        document.getElementById('Burgerson').style.display='none';
        document.getElementById('Beverageson').style.display='';
        document.getElementById('Snakeson').style.display='none';
    }
}
function Snakes() {
    if(!SnakesShow) {
        BurgersShow = false;
        BeveragesShow = false;
        SnakesShow = true;
        document.getElementById('Burgerson').style.display='none';
        document.getElementById('Beverageson').style.display='none';
        document.getElementById('Snakeson').style.display='';            
    }
}
