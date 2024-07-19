var settingmenu = document.querySelector(".setting-menu");
var drkBtn = document.getElementById("drk-btn");

function settingsMenuToggle(){

    settingmenu .classList.toggle("setting-menu-height");
}  

drkBtn.onclick= function(){
    drkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }

    
}

if(localStorage.getItem("theme")=="light"){
    drkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    drkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}


