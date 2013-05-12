(function() {
	"use strict";

init();

function init() {
	window.addEventListener("load", function() {
		embedSwf();
		addEventListeners();
	}, false);
}

function embedSwf() {
	var args = {
		path: "swf/universe.swf"
		, id: "earthandmoon"
		, width: "800"
		, height: "400"
		, version: "11"
		, updatePath: "" //"expressInstall.swf"
		, swfvars: {}
		, displayParams: {
			menu: "false"
			, scale: "showall"
		}
	};
	swfobject.embedSWF(
		args.path
		, args.id
		, args.width
		, args.height
		, args.version
		, args.updatePath
		, args.swfvars
		, args.displayParams
	);
}

var body;
function addEventListeners() {
	body = document.getElementById("body-tag");
	document.addEventListener("mousemove", function(event) {
		moveBackgroundImage(event);
	}, false);

	var msg1 = "Watch The Earth and Moons!";
	var msg2 = "Close";
	document.getElementById("earthText").innerText = msg1;

	document.getElementById("earth").addEventListener("click", function(event) {
		var elem = document.getElementById("earthandmoon");
		if (elem.style.display === "block") {
			elem.style.display = "none";
			event.target.innerText = msg1;
		}else{
			elem.style.display = "block";
			event.target.innerText = msg2;
		}
	}, false);
}

//--------------------------------------------------
function moveBackgroundImage(event) {
	var pos = getMousePosition(event);
	var offsetX = (pos.x / 120) - 5;
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
