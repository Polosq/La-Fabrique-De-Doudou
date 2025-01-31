let audiopika = document.getElementById("pikachu");
let audiosala = document.getElementById("salameche");
let audiomeow = document.getElementById("chat");
let audionoel = document.getElementById("noel");

let divpika = document.getElementById("divpika");
let divsala = document.getElementById("divsala");
let divchat = document.getElementById("divchat");
let divnoel = document.getElementById("divnoel");

let titrehlwn = document.getElementById("titrehlwn");
let titrenoel = document.getElementById("titrenoel");
let titrepaques = document.getElementById("titrepaques");
let titrefl = document.getElementById("titrefl");
let titrepokemon = document.getElementById("titrepokemon");

let boutonaudio = document.getElementById("boutononoff");

boutonaudio.src="Images/on.png";

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
    if (boutonaudio.src=="Images/on.png"){
        boutonaudio.src="Images/off.png";
        audiopika.pause();
        audiosala.pause();
        audiomeow.pause();
        audionoel.pause();
    }else if(boutonaudio.src=="Images/off.png"){
        boutonaudio.src="Images/on.png";
    }
}

function audioplay(e){
    if(boutonaudio.src=="Images/on.png"){
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
}

divpika.addEventListener("mouseover", audioplay);
divsala.addEventListener("mouseover", audioplay);
divchat.addEventListener("mouseover", audioplay);
divnoel.addEventListener("mouseover", audioplay);

titrehlwn.addEventListener("click", menu);
titrenoel.addEventListener("click", menu);
titrepaques.addEventListener("click", menu);
titrefl.addEventListener("click", menu);
titrepokemon.addEventListener("click", menu);

boutonaudio.addEventListener("click", audiotoogle);