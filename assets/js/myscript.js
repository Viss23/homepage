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

function playSound(melody){
  const path="/sounds/";
  console.log(path+melody+".mp3")
  const melodyPath=new Audio(path+melody+".mp3");
  melodyPath.play()
}

window.onload =function (){
  document.getElementById("blood").addEventListener("click", switchToColor.bind(this, "#CC1100"));
  document.getElementById("red").addEventListener("click", switchToColor.bind(this, "red"));
  document.getElementById("speech").addEventListener("click", function() {
  this.childNodes[2].play();
});
  document.getElementById("ghost").addEventListener("click",function(){
    document.getElementById("ghost-animation").style.display="block"
    setTimeout(()=>{
      document.getElementById("ghost-animation").style.display="none"
    },5700)
  })
  document.getElementById("hadouken").addEventListener("click",function(){
    //turn on audio effect
    document.getElementById('hadouken-audio').play();
    // I'm used 2 getElementById instead getElementsByClassName,for better perfomance
    document.getElementById("powerful-hadouken").style.display="block";
    document.getElementById("ray").style.display="block";
    // get all childs element of items which will be deleated
    const elements= document.getElementById("hadouken-animation1").children;
    const elements2= document.getElementById("hadouken-animation2").children;
    const listArray=Array.from([...elements,...elements2])
    const timeForDeleatingOneElement=400;
    const animationTime= listArray.length * timeForDeleatingOneElement;
    //disable all effects when the animation is over
    setTimeout(()=>document.getElementById('hadouken-audio').pause(),animationTime);
    setTimeout(()=>document.getElementById("powerful-hadouken").style.display="none",animationTime);
    setTimeout(()=>document.getElementById("ray").style.display="none",animationTime);
    for(let i=0;i<listArray.length;i++){
     setTimeout(() =>{
      listArray[i].style.display="none";
     },
     i * timeForDeleatingOneElement)
    }  
    ;
    
  })
    
}

