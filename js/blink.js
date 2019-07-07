function changeClass() {
    var element = document.getElementById("lightOn");
    element.getElementsByClassName("neon").toggle("lightOff");
    
}
document.addEventListener("click", onClick);
function onClick() {
  changeClass();
}

   
  
  