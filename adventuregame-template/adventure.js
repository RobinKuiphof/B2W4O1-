var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var title = document.getElementById("title");
var inventoryimg = document.getElementById("inventoryItem");
var discription = document.getElementById("description");
var gamecontainer = document.getElementById("game-container");



setInterval(timer, 500)

function timer(){

	var h = 0;
	var m = 0;
	m + 1
	


}

function startgameoption1(){

}
function startgameoption2(){
	dis.innerHTML = "the first quard checks the cells every 10 minutes" + "<br>" + "the second guard is upstairs and watches al cell doors he walks away to get coffee every hour. " 
}
function startgameoption3(){
	
}


function startgame(b1, b2, b3,title, inv, dis, game, gamecontainer){
	document.getElementById("game-container").style.backgroundImage = "url('img/prison 2.jpg')";
	b1.style.display = "inline-block";
	b3.style.display = "inline-block";
	dis.innerHTML = "option 1 = Search for hidden items." + "<br>" + "option 2 = check the routines of the guards" + "<br>"+ "option 3 = try to find some friends";
	b3.innerHTML = "option 3" ;
	b2.innerHTML = "option 2"
	b1.innerHTML = "option 1";
	b2.style.position = "static";
	b2.style.marginLeft = "80px";
	b1.style.marginLeft = "80px";
	b3.style.marginLeft = "80px";
	title.innerHTML = "You arrived at your cell what do you want to do?"

}


function startgameintro2(b1, b2, b3,title, inv, dis, game, gamecontainer){
	b2.innerHTML = "continue";
	title.innerHTML = "You will find some friends in the prison but their might also be some people that want to kill you!";
	discription.innerHTML = "So good luck!";
	b2.addEventListener("click", function(){
		startgame(b1, b2, b3,title, inv, dis, game, gamecontainer);
	});
}


function startgameintro(b1, b2, b3,title, inv, dis, game, gamecontainer){
	b2.innerHTML = "continue";
	title.innerHTML = "You got caught during your attampt to rob a bank";
	discription.style.display = "inline-block";
	discription.innerHTML = "you will arrive at the prison soon your job is to get out and do it fast!";
	b2.addEventListener("click", function(){
		startgameintro2(b1, b2, b3,title, inv, dis, game, gamecontainer);
	});
}



function startscreen(b1, b2, b3,title, inv, dis, game, gamecontainer) {

	b2.innerHTML = "start game";
	b2.addEventListener("click", function(){
		startgameintro(b1, b2, b3,title, inv, dis, game, gamecontainer)
	});	
	b1.style.display = "none";
	b3.style.display = "none";
	title.innerHTML = "Welcome to the prison break game";
	discription.style.display = "none";
	inventoryimg.style.display = "none";
	b2.style.position = "absolute";
	b2.style.top = "220px";
	b2.style.left = "580px";
}


startscreen(button1, button2, button3, title, inventoryimg, discription, gamecontainer)

