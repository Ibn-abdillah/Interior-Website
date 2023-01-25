let icon = document.getElementById("icon")
let menu = document.getElementById("menu")

icon.onclick = function(){
   if( menu.style.maxHeight == "400px"){
        menu.style.maxHeight = "0"
   }else{
        menu.style.maxHeight = "400px"
   }
}