let audiopika = document.getElementById("pikachu");
let audiosala = document.getElementById("salameche");
let audiomeow = document.getElementById("chat");
let audionoel = document.getElementById("noel");

let divpika = document.getElementById("divpika");
let divsala = document.getElementById("divsala");
let divchat = document.getElementById("divchat");
let divnoel = document.getElementById("divnoel");


function audioplay(e){
    if(this.id=="divpika"){
        audiopika.play();
    }
    if(this.id=="divsala"){
        audiosala.play();
    }
    if(this.id=="divchat"){
        audiomeow.play();
    }
    if(this.id=="divnoel"){
        audionoel.play();
    }
}

divpika.addEventListener("mouseover", audioplay);
divsala.addEventListener("mouseover", audioplay);
divchat.addEventListener("mouseover", audioplay);
divnoel.addEventListener("mouseover", audioplay);

