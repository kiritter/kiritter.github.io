(function() {
	"use strict";

init();

function init() {
	window.addEventListener("load", function() {

		var dataset = getDataset();
		drawArticles(dataset);

	}, false);
}

var CONST = {
	JS: "JavaScript"
	, P5: "Processing"
};

//--------------------------------------------------
function getDataset() {
	var dataset = [
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "jsID3"
			, targetHref: "http://kiritter.github.io/jsID3/"
			, body: "I tried reading ID3 tags in MP3 files."
			, note: "Keywords : バイナリデータ, 文字コード変換, Base64変換"
			, imgSrc: "img/ID3.png"
			, imgAlt: ""
		}
		, {
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "jsMaze"
			, targetHref: "http://kiritter.github.io/jsMaze/"
			, body: "Octocat goes through a maze! (JavaScript MVC SVG Example)"
			, note: "Keywords : グラフデータ構造, MVC, SVG"
			, imgSrc: "img/Maze.png"
			, imgAlt: ""
		}
		, {
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: ""
			, targetHref: ""
			, body: "(Coming soon... JavaScript Library)"
			, note: ""
			, imgSrc: ""
			, imgAlt: ""
		}
		, {
			categoryName: CONST.P5
			, categoryClass: "tag tagP5"
			, targetName: "prcBalls"
			, targetHref: "http://kiritter.github.io/prcBalls/"
			, body: "An example of Processing code."
			, note: "Keywords : Math & Physics"
			, imgSrc: "img/Balls.png"
			, imgAlt: ""
		}
		, {
			categoryName: CONST.P5
			, categoryClass: "tag tagP5"
			, targetName: "prcFirefly"
			, targetHref: "http://kiritter.github.io/prcFirefly/"
			, body: "Fireflies above a Stream."
			, note: "Keywords : Particle, Glow, Pixels"
			, imgSrc: "img/Firefly.png"
			, imgAlt: "薄暮の小川にゆらめくホタルの光"
		}
		, {
			categoryName: CONST.P5
			, categoryClass: "tag tagP5"
			, targetName: "prcScroll"
			, targetHref: "http://kiritter.github.io/prcScroll/"
			, body: "Infinite Scroll to the Right"
			, note: "Keywords : Scroll on Canvas, Parallax, Noise"
			, imgSrc: "img/Scroll.png"
			, imgAlt: ""
		}
		, {
			categoryName: CONST.P5
			, categoryClass: "tag tagP5"
			, targetName: "prcEmit"
			, targetHref: "http://kiritter.github.io/prcEmit/"
			, body: "A Black Ball emits Particles"
			, note: "Keywords : Particle, Glow, Pixels, and sinθ&cosθ"
			, imgSrc: "img/Emit.png"
			, imgAlt: ""
		}
		, {
			categoryName: CONST.P5
			, categoryClass: "tag tagP5"
			, targetName: "prcSeto"
			, targetHref: "http://kiritter.github.io/prcSeto/"
			, body: "The Seto Inland Sea in the Summer Evening"
			, note: "Keywords : tint"
			, imgSrc: "img/Seto.png"
			, imgAlt: "夏の夕暮れの瀬戸内海を進む貨物船"
		}
		, {
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "jsChart01"
			, targetHref: "http://kiritter.github.io/jsChart01/"
			, body: "A Single Series Line Chart - D3.js"
			, note: "Keywords : SVG, Chart, 折れ線グラフ(Single)"
			, imgSrc: "img/Chart01.png"
			, imgAlt: ""
		}
		, {
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "jsChart02"
			, targetHref: "http://kiritter.github.io/jsChart02/"
			, body: "A Multi Series Line Chart - D3.js"
			, note: "Keywords : SVG, Chart, 折れ線グラフ(Multi)"
			, imgSrc: "img/Chart02.png"
			, imgAlt: ""
		}
		, {
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "jsChart03"
			, targetHref: "http://kiritter.github.io/jsChart03/"
			, body: "A Line Chart with Zoom & Pan - D3.js"
			, note: "Keywords : SVG, Chart, 折れ線グラフ(Zoom & Pan)"
			, imgSrc: "img/Chart03.png"
			, imgAlt: ""
		}
		, {
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "jsChart04"
			, targetHref: "http://kiritter.github.io/jsChart04/"
			, body: "A Line Chart with Brush - D3.js"
			, note: "Keywords : SVG, Chart, 折れ線グラフ(範囲選択)"
			, imgSrc: "img/Chart04.png"
			, imgAlt: ""
		}
	];
	return dataset;
}

//--------------------------------------------------
function drawArticles(dataset) {
	var entries = d3.select("#entries")
		.selectAll("article.entry")
		.data(dataset)
		.enter()
		.append("article")
		.attr("class", "entry");

	entries.each(function(d, i) {
		var entry = d3.select(this);
		var h2 = entry.append("h2");
		h2.append("span")
			.attr("class", d.categoryClass)
			.text(d.categoryName);
		h2.append("a")
			.attr("class", function(d) {
				if (d.categoryName === CONST.JS) {
					return "JS";
				}else if (d.categoryName === CONST.P5) {
					return "P5";
				}
			})
			.attr("target", "_blank")
			.attr("href", d.targetHref)
			.text(d.targetName);
		entry.append("p")
			.text(d.body);
		entry.append("p")
			.attr("class", "note")
			.text(d.note);
		entry.append("a")
			.attr("target", "_blank")
			.attr("href", d.targetHref)
			.append("img")
			.attr("src", d.imgSrc)
			.attr("alt", d.imgAlt);
	});
}

})();
