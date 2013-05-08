(function() {
	"use strict";

init();

function init() {
	window.addEventListener("load", function() {
		addEventListenerToDocument();
	}, false);
}

var body;
function addEventListenerToDocument() {
	body = document.getElementById("body-tag");

	document.addEventListener("mousemove", function(event) {
		moveBackgroundImage(event);
	}, false);
}

//--------------------------------------------------
function moveBackgroundImage(event) {
	var pos = getMousePosition(event);
	var offsetX = (pos.x / 120) - 10;
	//横位置 縦位置
	body.style.backgroundPosition = "" + (50 + offsetX) + "% 10%";
}

function getMousePosition(event) {
	var pos = {};
	pos.x = event.clientX;
	pos.y = event.clientY;
	return pos;
}

})();
