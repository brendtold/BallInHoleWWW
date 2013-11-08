function play() {
	playing = true;
	if (reset) {
		setup();
		reset = false;
	}
	time = 0;
	var timer_text = document.getElementById("timer");
	while(timer_text.childNodes.length >= 1) {
		timer_text.removeChild(timer_text.firstChild);
	}
	timer_text.appendChild(
		timer_text.ownerDocument.createTextNode(time)
	);
}

function pause() {
	playing = false;
}

function stop() {
	reset = true;
	playing = false;
}


function setup() {
	winW = window.innerWidth;
	winH = window.innerHeight;
	var surface = document.getElementById('surface');
	surface.width = winW;
	surface.height = winH;
	var radius = 50;
	ball = {	radius:radius,
				x:Math.round(winW/2),
				y:Math.round(winH/2),
				color:'rgb(255,172,35)'};

	var rndX = Math.floor((Math.random()*winW)+1);
	var rndY = Math.floor((Math.random()*winH)+1);

	hole = {	radius:70,
				x:rndX,
				y:rndY,
				color:'rgba(40, 40, 40, 255)'};
				
	render();
}


function check_won() {
	var radius = 8;
	var x = ball.x;
	var y = ball.y;
	var rndX = hole.x;
	var rndY = hole.y;
	if (rndX - radius < x && x < rndX + radius && rndY - radius < y && y < rndY + radius) {
		alert("won");
		stop();
	}
}

function game_timer() {
	if (playing) {
		time += 1;
		var timer_text = document.getElementById("timer");
		while(timer_text.childNodes.length >= 1) {
			timer_text.removeChild(timer_text.firstChild);
		}
		timer_text.appendChild(
			timer_text.ownerDocument.createTextNode(time)
		);
	}

}