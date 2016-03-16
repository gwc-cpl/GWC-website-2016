/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
	//variables
	var y = 525;
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var leftArrow = new Image()
	var rightArrow = new Image()
	var topArrow = new Image()
	var bottomArrow = new Image()
	var top = new Image();
	leftArrow.src = "leftArrow.png";
	top.src = "TopArrows.jpg";
	top.onload = function(){       
		ctx.drawImage(top,0,0);                 
	};   
	leftArrow.onload = function(){       
		ctx.drawImage(leftArrow,0,y);                 
	}; 

	setInterval(function() {
		//if (y == -10) {
		//	if(){
				
		//	}
			//clearInterval(id);
		//}
		ctx.rect(0,y,100,100);
		ctx.fillStyle = "white";
		ctx.fill();
		if (y<100){
			ctx.drawImage(top,0,0);
		}
		ctx.drawImage(leftArrow,0,y);
		y--;
	}, 10);
});


