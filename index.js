
var size=document.querySelectorAll(".drum").length;
for(var i=0;i<size;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    function handleClick(){

     var buttonInner=this.innerHTML;
     makeSound(buttonInner);
     buttonAnimation(buttonInner);
}
}
document.addEventListener("keydown",function(event){
makeSound(event.key);
buttonAnimation(event.key);
});
function makeSound(key)
{

    switch(key)
    {
       case "W":
       var tom1=new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;
       case "A":
       var tom2=new Audio("tom-2.mp3");
       tom2.play();
       break;
       case "S":
       var tom3=new Audio("tom-3.mp3");
       tom3.play();
       break;
       case "D":
       var tom4=new Audio("tom-4.mp3");
       tom4.play();
       break;
       case "K":
       var crash=new Audio("crash.mp3");
       crash.play();
       break;
       case "J":
       var snare=new Audio("snare.mp3");
       snare.play();
       break;
       case "L":
        var kick=new Audio("kick-bass.mp3");
        kick.play();
        break;
        default :console.log(buttonInner);
    }
}
function buttonAnimation(currentKey)
{
  var active=document.querySelector("."+currentKey);
  active.classList.add("pressed");
  setTimeout(function() {
 active.classList.remove("pressed");
  },200)
}
