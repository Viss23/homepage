function switchToColor(color) {
  try {
    document.querySelectorAll(".page").forEach(function(page) {
      page.style.borderColor = color;
    });
    document.querySelectorAll(".avatar").forEach(function(avatar) {
      avatar.contentDocument.getElementById("circle").setAttribute("fill", color);
    });
  } catch (error) {}
}

window.onload =function (){
  document.getElementById("blood").addEventListener("click", switchToColor.bind(this, "#CC1100"));
  document.getElementById("red").addEventListener("click", switchToColor.bind(this, "red"));
  document.getElementById("speech").addEventListener("click", function() {
  this.childNodes[2].play();
});
  this.document.getElementById("ghost").addEventListener("click",function(){
    document.getElementById("ghost-animation").style.display="block"
    setTimeout((elem)=>{
      document.getElementById("ghost-animation").style.display="none"
    },5700)
  })
}
