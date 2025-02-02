let audiopika = document.getElementById("pikachu");
let audiosala = document.getElementById("salameche");
let audiomeow = document.getElementById("chat");
let audionoel = document.getElementById("noel");

let divchat = document.getElementById("divchat");
let divcsouris = document.getElementById("divcsouris");

let divpnoel = document.getElementById("divnoel");
let divrene = document.getElementById("divrene");

let divlapinou = document.getElementById("divlapinou");
let divlapin = document.getElementById("divlapin");

let divaubergine = document.getElementById("divaubergine");
let divpoire = document.getElementById("divpoire");

let divpika = document.getElementById("divpika");
let divsala = document.getElementById("divsala");

let titrehlwn = document.getElementById("titrehlwn");
let titrenoel = document.getElementById("titrenoel");
let titrepaques = document.getElementById("titrepaques");
let titrefl = document.getElementById("titrefl");
let titrepokemon = document.getElementById("titrepokemon");

let tab = document.getElementsById("tab");

let boutonaudio = document.getElementById("boutononoff");

boutonaudio.src="Images/off.png";

function menu(e){  
    if(this.className=="titreclic"){
        $(titrehlwn.parentNode).removeClass("invisible");      
        $(titrenoel.parentNode).removeClass("invisible");
        $(titrepaques.parentNode).removeClass("invisible");
        $(titrefl.parentNode).removeClass("invisible");
        $(titrepokemon.parentNode).removeClass("invisible");
    
        $(titrehlwn).removeClass("titreclic");
        $(titrenoel).removeClass("titreclic");
        $(titrepaques).removeClass("titreclic");
        $(titrefl).removeClass("titreclic");
        $(titrepokemon).removeClass("titreclic");

        $(titrehlwn).addClass("titre");
        $(titrenoel).addClass("titre");
        $(titrepaques).addClass("titre");
        $(titrefl).addClass("titre");
        $(titrepokemon).addClass("titre");
            
    }else{
        $(titrehlwn.parentNode).addClass("invisible");
        $(titrenoel.parentNode).addClass("invisible");
        $(titrepaques.parentNode).addClass("invisible");
        $(titrefl.parentNode).addClass("invisible");
        $(titrepokemon.parentNode).addClass("invisible");
        
        $(this.parentNode).removeClass("invisible");
        
        $(this).addClass("titreclic");
        $(this).removeClass("titre");
    }
}

function audiotoogle(e){
    if (boutonaudio.className=="onoff"){
        $(boutonaudio).addClass("cliquee");
        boutonaudio.src="Images/off.png";

        audiopika.muted=true;
        audiosala.muted=true;
        audiomeow.muted=true;
        audionoel.muted=true;
    }else{
        boutonaudio.src="Images/on.png";
        $(boutonaudio).removeClass("cliquee");
    }
}

function audioplay(e){
    if(boutonaudio.className == "onoff") {
        audiopika.muted=true;
        audiosala.muted=true;
        audiomeow.muted=true;
        audionoel.muted=true;
        if(this.id=="divpika"){
            audiopika.muted=false;
            audiopika.play();
        }
        if(this.id=="divsala"){
            audiosala.muted=false;
            audiosala.play();
        }
        if(this.id=="divchat"){
            audiomeow.muted=false;
            audiomeow.play();
        }
        if(this.id=="divnoel"){
            audionoel.muted=false;
            audionoel.play();
        }
    }
}

function redirect(e){
    if(this.id=="divchat"){
        window.location.href="Page/Halloween1.html";
    }
    if(this.id=="divcsouris"){
        window.location.href="Page/Halloween2.html";
    }
    if(this.id=="divnoel"){
        window.location.href="Page/Noel1.html";
    }
    if(this.id=="divrene"){
        window.location.href="Page/Noel2.html";
    }
    if(this.id=="divlapinou"){
        window.location.href="Page/Paques1.html";
    }
    if(this.id=="divlapin"){
        window.location.href="Page/Paques2.html";
    }
    if(this.id=="divaubergine"){
        window.location.href="Page/Legume.html";
    }
    if(this.id=="divpoire"){
        window.location.href="Page/Fruit.html";
    }
    if(this.id=="divpika"){
        window.location.href="Page/Pokemon1.html";
    }
    if(this.id=="divsala"){
        window.location.href="Page/Pokemon2.html";
    }   
}



divpika.addEventListener("mouseover", audioplay);
divsala.addEventListener("mouseover", audioplay);
divchat.addEventListener("mouseover", audioplay);
divpnoel.addEventListener("mouseover", audioplay);

divchat.addEventListener("click", redirect);
divcsouris.addEventListener("click", redirect);
divpnoel.addEventListener("click", redirect);
divrene.addEventListener("click", redirect);
divlapinou.addEventListener("click", redirect);
divlapin.addEventListener("click", redirect);
divaubergine.addEventListener("click", redirect);
divpoire.addEventListener("click", redirect);
divpika.addEventListener("click", redirect);
divsala.addEventListener("click", redirect);

titrehlwn.addEventListener("click", menu);
titrenoel.addEventListener("click", menu);
titrepaques.addEventListener("click", menu);
titrefl.addEventListener("click", menu);
titrepokemon.addEventListener("click", menu);

boutonaudio.addEventListener("click", audiotoogle);
