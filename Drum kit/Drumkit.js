var numberofbutton=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofbutton;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",handle);
function handle()
{
		var buttonInnerHTML=this.innerHTML;
	     makesound(buttonInnerHTML);
	     buttonanimation(buttonInnerHTML);
}

}
document.addEventListener("keypress",function(event)
					 {
	makesound(event.key);
	buttonanimation(event.currentkey);
	
});
function makesound(key)
{
	switch(key)
		{
		case "w":
		var tom1=new Audio('./sounds/tom-1.mp3');
	    tom1.play();
		break;
				
	    case "a":
		var tom2=new Audio("./sounds/tom-2.mp3");
	    tom2.play();
		break;
	
	    case "s":
		var tom3=new Audio("sounds/tom-3.mp3");
	    tom3.play();
		break;
		
		case "d":
		var tom4=new Audio("sounds/tom-4.mp3");
	    tom4.play();
		break;
		
		case "j":
		var tom5=new Audio("sounds/snare.mp3");
	    tom5.play();
		break;
				
		case "k":
		var tom6=new Audio("sounds/kick-bass.mp3");
	    tom6.play();
		break;
		case "l":
		var tom7=new Audio("sounds/kick-bass.mp3");
	    tom7.play();
		break;
		
		default:
				console.log(buttonInnerHTML);
	   }
}
function buttonanimation(currentkey)
{
	var active=document.querySelector("." + currentkey);
	active.classList.add("pressed");
	setTimeout(function()
			  {
		active.classList.remove("pressed");
	},100);
}