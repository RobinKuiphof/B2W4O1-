var b1 = document.getElementById("button1");
var b2 = document.getElementById("button2");
var b3 = document.getElementById("button3");
var title = document.getElementById("title");
var inv = document.getElementById("inventoryItem");
var dis = document.getElementById("description");
var gamecontainer = document.getElementById("game-container");
var paper = document.getElementById("paper");
var pen = document.getElementById("pen");

var itempaper = itempaper + 0;
var itempen = itempen + 0;
console.log(itempen)
var h = 0
var m = 0
var s = 0


var timer = setInterval(timer, 500)
function timer(){
	s = s + 10;

	if(m == 60){
		h++
		m = m - 60;
	}
	if(s >= 60){
		m++
		s = s - 60;
	}
	var timer = document.getElementById("time");
	if(m < 10){
		timer.innerHTML = h + ":" + "0" + m +  ":" + s;		
	}
	if(m >=10){
		timer.innerHTML = h + ":" + m +  ":" + s;	
	}
}
function roof(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper){
	title.innerHTML = "you jumped out you are on the roof now"
	gamecontainer.style.backgroundImage = "url('img/prison10.jpg')";
	dis.innerHTML = "option 1 = Run out of the prison as fast as you can" + "<hr>" + "option 2 = Sneek out of the prison and make sure no one sees you" + "<hr>" + "option 3 = go back into the prison";
	b1.innerHTML = "option 1"
	b2.innerHTML = "option 2"
	b3.innerHTML = "option 3"
	b1.style.display = "inline-block"
	b2.style.display = "inline-block"
	b3.style.display = "inline-block"
	b1.onclick = function(){
		title.innerHTML = "A guard spotted you and killed you";
		b1.style.display = "none";
		b3.style.display = "none";
		dis.style.display = "none";
		b2.style.display = "inline-block";
		b2.style.marginLeft = "280px";
		b2.style.marginTop = "240px";
		b2.innerHTML = "Reset";
		b2.onclick = function(){
			location.reload();
		}
	}
	b2.onclick = function(){
		title.innerHTML = "Well done you got out of the prison!"
		b1.style.display = "none"
		b2.style.display = "none";
		b3.style.display = "none";
		dis.style.display = "none";
		inv.style.display = "none";
		paper.style.display = "none";
		pen.style.display = "none";
	}
	b3.onclick = function(){
		stage2breakout(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper)
	}
}
function stage2breakout(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper){
	gamecontainer.style.backgroundImage = "url('img/prison9.jpg')";
	title.innerHTML = "Try to break out"
	dis.innerHTML = "option 1 = Let your friend distrect the guard" + "<hr>" + "option 2 = start cutting the bars" + "<hr>" + "option 3 = Jump through window";
	b1.innerHTML = "option 1";
	b2.innerHTML = "option 2";
	b3.innerHTML = "option 3";
	b1.onclick = function(){
		title.innerHTML = "the guard is distrectet"
		stage2breakout(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper);
		b1.style.display = "none";
	}
	b2.onclick = function(){
		if(b1.style.display == "none"){
			title.innerHTML = "You succeeded"
			b2.style.display = "none"
			stage2breakout(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper)
			gamecontainer.style.backgroundImage = "url('img/prison 4.jpg')";
		}
		else{
			title.innerHTML = "The guard saw you and killed you"
			b1.style.display = "none";
			b3.style.display = "none";
			b2.style.display = "inline-block";
			b2.style.marginLeft = "280px";
			b2.style.marginTop = "240px";
			b2.innerHTML = "Reset";
			b2.onclick = function(){
				location.reload();
			}
		}
	}
	b3.onclick = function(){
		if(b2.style.display == "none"){
			roof(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper);
		}
		else{
			title.innerHTML == "You broke your neck"
			b1.style.display = "none";
			b3.style.display = "none";
			b2.style.display = "inline-block";
			b2.style.marginLeft = "280px";
			b2.style.marginTop = "240px";
			b2.innerHTML = "Reset";
			b2.onclick = function(){
				location.reload();
			}
		}
	}
}

function startbreakout(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper){

	title.innerHTML = "you are moved to safer less protected part of the prison";
	gamecontainer.style.backgroundImage = "url('img/prison8.jpg')";
	dis.innerHTML = "option 1 = hit the guard so you get moved back" + "<hr>" + "option 2 = accept the move" + "<hr>" + "option 3 = try to run away"
	b1.innerHTML = "option 1"
	b2.innerHTML = "option 2"
	b3.innerHTML = "option 3"
	b1.style.display = "inline-block"
	b2.style.display = "inline-block"
	b3.style.display = "inline-block"
	b2.style.marginLeft = "80px";
	b1.style.marginLeft = "80px";
	b3.style.marginLeft = "80px";

	b1.onclick = function(){
		startgame(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper)	
	}
	b2.onclick = function(){
		stage2breakout(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper);
	}
	b3.onclick = function(){
		dis.innerHTML = "";
		title.innerHTML = "The guard killed you"
		b1.style.display = "none";
		b3.style.display = "none";
		b2.style.display = "inline-block";
		b2.style.marginLeft = "280px";
		b2.style.marginTop = "240px";
		b2.innerHTML = "Reset";
		b2.onclick = function(){
			location.reload();
		}
	}
}


function friends(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper){
	
	gamecontainer.style.backgroundImage = "url('img/prison5.jpg')";
	var random = Math.random() * 3

	if(random <= 1){
		title.innerHTML = "You found a friend";
		var friend = "true";
		b1.style.display = "none";
		b3.style.display = "none";
		b2.style.marginLeft = "280px";
		b2.style.marginTop = "240px";
		b2.innerHTML = "Back"
		gamecontainer.style.backgroundImage = "url('img/prison6.jpg')";	
		b2.onclick = function(){
		startgame(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper)	
		}
	}
	
	else if(random <=2 && random > 1){
		title.innerHTML = "A enemy killed you!"
		b1.style.display = "none";
		b3.style.display = "none";
		b2.style.marginLeft = "280px";
		b2.style.marginTop = "240px";
		b2.innerHTML = "restart";
		b2.onclick = function(){
			location.reload();
		}
	}
	
	else if(random > 2){
		title.innerHTML = "somoene tried to kill you but you survived you can go back after 5 minutes";
		b1.style.display = "none";
		b3.style.display = "none";
		b2.style.display = "none";
		b2.style.marginLeft = "280px";
		b2.style.marginTop = "240px";
		gamecontainer.style.backgroundImage = "url('img/prison7.jpg')";		
		inv.style.display = "inline-block";
		inv.style.position = "absolute";
		inv.style.top = "470px";
		inv.style.left = "735px";
		inv.style.height = "20px";
		inv.style.width = "20px";
		inv.style.opacity = "30%";
		inv.onclick = function(){
			inv.style.opacity = "100%";
			inv.style.width = "50px";
			inv.style.top = "500px";
			inv.style.left = "750px";
			inv.style.height = "50px";
			b2.innerHTML = "hit the guard with your file";
			b2.style.display = "inline-block";
			b2.onclick = function(){
				title.innerHTML = "the guard killed you";
				b2.style.display = "none"
				setTimeout(function(){
				location.reload()
				},5000)
			}
		}		
		setTimeout(function(){
			b2.style.display = "inline-block";
			b2.innerHTML = "Go back to your cell";	
			b2.onclick = function(){
				if(inv.style.height == "50px"){
					startbreakout(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper)
				}
				else{
				startgame(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper)
				}
			}
		},30000)
	}
}

function searchitems(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper){
		
		b1.style.display = "none";
		b3.style.display = "none";
		b2.style.marginLeft = "280px";
		b2.style.marginTop = "240px";
		b2.innerHTML = "Back";
		dis.innerHTML = "";
		title.innerHTML = "click on the items you can find";			
		
		b2.onclick = function(){
			if(paper.style.height == "20px"){
				paper.style.display = "none";
			}
			if(pen.style.height == "20px"){
				pen.style.display = "none";
			}
			startgame(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper)
		}	
		paper.style.display = "inline-block";	
		pen.style.display = "inline-block";	
		if(paper.style.height == "50px"){
			paper.style.height = "50px";
			paper.style.opacity = "100%";
			paper.style.top = "500px";
			paper.style.left = "600px";	
		}
	
		else{
		paper.style.height = "20px";
		paper.style.position =  "absolute";
		paper.style.top = "390px";
		paper.style.left = "900px";
		paper.style.opacity = "20%";
		
		paper.onclick = function(){
			var itempaper = 1;
			paper.style.height = "50px";
			paper.style.opacity = "100%";
			paper.style.top = "500px";	
			paper.style.left = "600px";
			}
		}
		pen.style.display = "inline-block";	
		
	
	if(pen.style.height != "50px"){
		pen.style.height = "20px";
		pen.style.position =  "absolute";
		pen.style.top = "400px";
		pen.style.left = "350px";
		pen.style.opacity = "20%";
		pen.onclick = function(){
			var itempen = 1;
			pen.style.height = "50px";
			pen.style.opacity = "100%";
			pen.style.top = "500px";
			pen.style.left = "450px";
		}
	}	
	else{
		pen.style.height = "50px";
		pen.style.opacity = "100%";
		pen.style.top = "500px";
		pen.style.left = "450px";		
	}
}

function gameoption2(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen,itempen, itempaper){

	if(pen.style.height != "50px" && paper.style.height != "50px"){
		title.innerHTML = "You need 2 more items";
	}
	else if(pen.style.height == "50px" && paper.style.height != "50px"){
		title.innerHTML = "You need 1 more item";
	}
	else if(pen.style.height != "50px" && paper.style.height == "50px"){
		title.innerHTML = "You need 1 more item";
	}
	else{
		title.innerHTML = ""
		dis.innerHTML = "there are some times when the guards are away." + "<br>" + "<br>" + "between 00:40 and 01:20" + "<br>" + "between 02:30 and 03:00" + "<br>" + "between 05:00 and 07:20" + "<br>" + "between 12:40 and 13:20" +  "<br>" + "between 15:40 and 16:00" + "<br>" + "between 21:40 and 22:20";
		b1.style.display = "none";
		b3.style.display = "none";
		b2.style.marginLeft = "280px";
		b2.style.marginTop = "180px";
		gamecontainer.style.backgroundImage = "url('img/prison5.jpg')";
		b2.innerHTML = "Back";
		b2.onclick = function(){
			startgame(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper);
		}
	}
}



function startgame(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper){
	gamecontainer.style.backgroundImage = "url('img/prison 2.jpg')";
	b1.style.display = "inline-block";
	b3.style.display = "inline-block";
	dis.innerHTML = "option 1 = Search for hidden items." + "<br>" + "option 2 = check the routines of the guards" + "<br>"+ "option 3 = try to find some friends";
	b3.innerHTML = "option 3" ;
	b2.innerHTML = "option 2";
	b1.innerHTML = "option 1";
	b2.style.position = "static";
	b2.style.marginLeft = "80px";
	b1.style.marginLeft = "80px";
	b3.style.marginLeft = "80px";
	b3.style.marginTop = "200px";
	b2.style.marginTop = "200px";
	b1.style.marginTop = "200px";
	title.innerHTML = "what do you want to do?"
	console.log(friends)

	b1.onclick = function(){
		searchitems(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen,itempen, itempaper);
		dis.innerHTML = "";
		title.innerHTML = "click on the items you can find";
	}
		
	b2.onclick = function(){
		gameoption2(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper);
	}
			
	
		
	b3.onclick = function(){
		dis.innerHTML = "";	
		friends(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen, itempen, itempaper)
	}
}
function startgameintro2(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen,itempen, itempaper){
	b2.innerHTML = "continue";
	title.innerHTML = "You will find some friends in the prison but their might also be some people that want to kill you!";
	dis.innerHTML = "Good luck!";
	b2.style.marginTop = "300px";
	b2.style.marginLeft = "300px";
	b2.style.width = "200px";
	gamecontainer.style.backgroundImage = "url('img/prison 1.jpg')";
	b2.onclick = function(){
	startgame(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen,itempen, itempaper);
	}
}


function startgameintro(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen,itempen, itempaper){
	b2.innerHTML = "continue";
	title.innerHTML = "You got caught during your attampt to rob a bank";
	dis.style.display = "inline-block";
	dis.innerHTML = "you will arrive at the prison soon your job is to get out and do it fast!";
	b2.style.marginTop = "340px";
	b2.style.marginLeft = "300px";
	b2.style.width = "200px";
	b2.onclick = function(){
		startgameintro2(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen,itempen, itempaper);
	}
}



function startscreen(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen,itempen, itempaper) {

	b2.innerHTML = "start game";
	b1.style.display = "none";
	b3.style.display = "none";
	title.innerHTML = "Welcome to the prison break game";
	dis.style.display = "none";
	inv.style.display = "none";
	b2.style.position = "static";
	b2.style.marginTop = "360px";
	b2.style.marginLeft = "300px";
	paper.style.display = "none";
	pen.style.display = "none";
	b2.onclick = function(){
		startgameintro(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen,itempen, itempaper)
	}
}


startscreen(b1, b2, b3,title, inv, dis, gamecontainer, paper,pen,itempen, itempaper)

