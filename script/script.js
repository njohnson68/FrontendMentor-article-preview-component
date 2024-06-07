function clickPopUp(){
    let x = document.getElementById("popup");
    if(x.style.display === "none"){
        x.style.display = "flex";
    }
    else{
        x.style.display = "none";
    }
}