
const minBtn = document.getElementById("carboChrono");

minBtn.addEventListener("click", disco);

function disco() {
    const merguez = document.getElementById("merguez");
    merguez.play();
}


let nav = document.querySelector("#navTuning");
let stopbtn = document.getElementById("anim");
let h1 = document.querySelector("h1");
let imgNav = document.getElementById("imgNav");
let imgNav2 = document.getElementById("imgNav2");
minBtn.addEventListener('click', anim);

function anim(){
    nav.classList.toggle('headerBg');
    h1.classList.toggle('h1Anim');
    imgNav.classList.toggle('displayNone');
    imgNav2.classList.toggle('displayNone');   
}

const showChrono = document.getElementById("showChrono");
let nombre = 480;

minBtn.addEventListener("click", chrono);


function chrono() {
  showChrono.innerHTML = nombre;
  nombre = nombre - 1;
  if (nombre >= 0){
    setTimeout(chrono, 1000)
  }
}

const fifi = document.querySelector(".video");

minBtn.addEventListener("click", flying);

function flying() {
  fifi.classList.toggle("phil");
}