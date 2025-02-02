let div = document.getElementById("maDiv");

function mobile(e){
    if(window.innerWidth<window.innerHeight){
        $(div).removeClass("maDiv").addClass("maDivmobile");
    }else{
        $(tab).removeClass("maDivmobile").addClass("maDiv");
    }
}

window.addEventListener("resize", mobile);
window.addEventListener("load", mobile);
window.addEventListener("orientationchange", mobile);
window.addEventListener("fullscreenchange", mobile);