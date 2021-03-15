var xCord;
var yCord;
var seen;
var dir; // direction 0 = up, 1 = right, 2 = down, 3 = left
var canvas;
var ctx;
var timer;

function start() {
	xCord = 0;
	yCord = 250;
	seen = [];
	dir = 1;
	document.getElementById("startBtn").value = "Stop";
	document.getElementById("startBtn").onclick = stop;
	canvas = document.getElementById("snCanvas");
	ctx = canvas.getContext("2d");
	clearCanvas();
	ctx.fillStyle = "#FF0000";
	timer = setInterval( run ,50);
}

function run() {
	seen.push([xCord,yCord]);
	switch(dir) {
		case 0:
			yCord -= 5;
			break;
		case 1:
			xCord += 5;
			break;
		case 2:
			yCord += 5;
			break;
		case 3:
			xCord -= 5;
	}
	if(xCord < 0 || yCord < 0 || xCord > 1000 || yCord > 500) {
		stop();
	}else if(contains(seen,[xCord,yCord])) {
		stop();
	} else {
		ctx.fillRect(xCord,yCord,5,5);
	}
}

function stop() {
	document.getElementById("startBtn").value = "Start";
	document.getElementById("startBtn").onclick = start;
	clearInterval(timer);
}

function left() {
	if(dir - 1 < 0) {
		dir = 3;
	} else {
		dir = dir - 1;
	}
	
}

function right() {
	dir = (dir + 1) % 4;
}

function contains(array, cordPair) {
	for(var i = 0; i < array.length; i++) {
		if(cordPair[0] == array[i][0] && cordPair[1] == array[i][1]) {
			return true;
		}
	}
	return false;
}

function clearCanvas() {
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,1000,500);
	ctx.fillStyle = "#FF0000";
}