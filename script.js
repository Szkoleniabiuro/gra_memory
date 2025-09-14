let wynik = 0;
let tablica = [];
let blokada = false;
let pary = 10
let odkryte = 0
let x = 1;

let box = {

x1:'<div id="d1" class="mybox" data-num="1">1</div>',
x2:'<div id="d2" class="mybox" data-num="2">2</div>',
x3:'<div id="d3" class="mybox" data-num="3">3</div>',
x4:'<div id="d4"class="mybox"  data-num="4">4</div>',
x5:'<div id="d5" class="mybox" data-num="5">5</div>',
x6:'<div id="d6" class="mybox" data-num="6">6</div>',
x7:'<div id="d7" class="mybox" data-num="7">7</div>',
x8:'<div id="d8" class="mybox" data-num="8">8</div>',
x9:'<div id="d9" class="mybox" data-num="9">9</div>',
x10:'<div id="d10" class="mybox" data-num="10">10</div>',
x11:'<div id="d11" class="mybox" data-num="10">10</div>',
x12:'<div id="d12" class="mybox" data-num="9">9</div>',
x13:'<div id="d13" class="mybox" data-num="8">8</div>',
x14:'<div id="d14" class="mybox" data-num="7">7</div>',
x15:'<div id="d15" class="mybox" data-num="6">6</div>',
x16:'<div id="d16" class="mybox" data-num="5">5</div>',
x17:'<div id="d17" class="mybox" data-num="4">4</div>',
x18:'<div id="d18" class="mybox" data-num="3">3</div>',
x19:'<div id="d19" class="mybox" data-num="2">2</div>',
x20:'<div id="d20" class="mybox" data-num="1">1</div>'

}

let tab = Object.values(box);


let stab = tab.sort(function() {return 0.5 - Math.random()}); 


document.getElementById("pok").innerHTML = stab.join("");

let a = document.getElementsByClassName("mybox")

for (let i = 0; i < a.length; i++) {
  
  a[i].addEventListener("click", function() {

   wynik = Math.floor(x++ / 2);
   document.getElementById("info").innerHTML = "Ilość prób: " + wynik;

  if (blokada || this.classList.contains("zm") || this.classList.contains("kol")) return;

  this.classList.add("kol"); 
  tablica.push(this);         

  if (tablica.length === 2) { 
    blokada = true;

    if (tablica[0].dataset.num === tablica[1].dataset.num) {
       tablica[0].classList.add("zm");
       tablica[1].classList.add("zm");

       odkryte++;

       if (odkryte === pary) {
         alert(`Brawo ! - Twój wynik - ${wynik}`);

       }

       tablica = [];  
       blokada = false; 

    } else {
       setTimeout(() => {
          tablica[0].classList.remove("kol");
          tablica[1].classList.remove("kol");
          tablica = [];  
          blokada = false; 
       }, 1000);
    }
  }
});
}


