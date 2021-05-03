const dropdown = document.getElementById("navlinkslide");
const bars = document.getElementById("myicon");

dropdown.style.opacity = "0";

bars.addEventListener("click", toggleslide);

function toggleslide(){
  if(dropdown.style.opacity === "0"){
    dropdown.style.opacity = "1";
    dropdown.style.transition = "opacity 1s";
  } else {
    dropdown.style.opacity = "0";
  }
}