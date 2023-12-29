(function() {
	"use strict";

init();

function init() {
	window.addEventListener("load", function() {

		var productDataset = getProductDataset();
		drawArticles("#entries-product", productDataset);
		var exampleDataset = getExampleDataset();
		drawArticles("#entries-example", exampleDataset);

	}, false);
}

var CONST = {
	JS: "JavaScript"
	, P5: "Processing"
};

//--------------------------------------------------
function getProductDataset() {
	var dataset = [
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "街道浮世絵マップ"
			, targetHref: "kaidoukiyoemap/"
			, date: "2023/12"
			, body: ""
			, note: "Keywords : Map, Leaflet"
			, imgSrc: "img/kaidoukiyoemap_icon-96x96.png"
			, imgAlt: ""
		},
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "時期と距離の比較地図"
			, targetHref: "hikakumap/"
			, date: "2023/12"
			, body: ""
			, note: "Keywords : Map, Leaflet"
			, imgSrc: "img/hikakumap_icon-96x96.png"
			, imgAlt: ""
		},
	];
	return dataset;
}

//--------------------------------------------------
function getExampleDataset() {
	var dataset = [
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "event"
			, targetHref: "event/"
			, date: "2018/6"
			, body: ""
			, note: "Keywords : Pub/Sub"
			, imgSrc: ""
			, imgAlt: ""
		},
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "tree"
			, targetHref: "tree/"
			, date: "2017/8"
			, body: ""
			, note: "Keywords : デザパタ"
			, imgSrc: ""
			, imgAlt: ""
		},
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "undo"
			, targetHref: "undo/"
			, date: "2017/7"
			, body: ""
			, note: "Keywords : デザパタ"
			, imgSrc: ""
			, imgAlt: ""
		},
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "musicalchairs"
			, targetHref: "musicalchairs/"
			, date: "2017/5"
			, body: ""
			, note: "Keywords : オブジェクト指向"
			, imgSrc: ""
			, imgAlt: ""
		},
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "firefly2"
			, targetHref: "firefly2/"
			, date: "2015/5"
			, body: "Fireflyに再挑戦"
			, note: "Keywords : オブジェクト指向"
			, imgSrc: ""
			, imgAlt: ""
		},
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "KiRhythmbox v0.8"
			, targetHref: "KiRhythmbox_v0.8/"
			, date: "2013/9"
			, body: "リズム譜を書くことで、音楽とざっくり同期を取って何かするためのJavaScriptライブラリ"
			, note: "一旦、Exampleのカタチで載せて一区切り"
			, imgSrc: "img/KiRhythmbox_v0.8.png"
			, imgAlt: ""
		},
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "jsChart04"
			, targetHref: "jsChart04/"
			, date: "2013/9"
			, body: "A Line Chart with Brush - D3.js"
			, note: "Keywords : SVG, Chart, 折れ線グラフ(範囲選択)"
			, imgSrc: "img/Chart04.png"
			, imgAlt: ""
		},
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "jsChart03"
			, targetHref: "jsChart03/"
			, date: "2013/9"
			, body: "A Line Chart with Zoom & Pan - D3.js"
			, note: "Keywords : SVG, Chart, 折れ線グラフ(Zoom & Pan)"
			, imgSrc: "img/Chart03.png"
			, imgAlt: ""
		},
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "jsChart02"
			, targetHref: "jsChart02/"
			, date: "2013/9"
			, body: "A Multi Series Line Chart - D3.js"
			, note: "Keywords : SVG, Chart, 折れ線グラフ(Multi)"
			, imgSrc: "img/Chart02.png"
			, imgAlt: ""
		},
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "jsChart01"
			, targetHref: "jsChart01/"
			, date: "2013/9"
			, body: "A Single Series Line Chart - D3.js"
			, note: "Keywords : SVG, Chart, 折れ線グラフ(Single)"
			, imgSrc: "img/Chart01.png"
			, imgAlt: ""
		},
		{
			categoryName: CONST.P5
			, categoryClass: "tag tagP5"
			, targetName: "prcSeto"
			, targetHref: "prcSeto/"
			, date: "2013/7"
			, body: "The Seto Inland Sea in the Summer Evening"
			, note: "Keywords : tint"
			, imgSrc: "img/Seto.png"
			, imgAlt: "夏の夕暮れの瀬戸内海を進む貨物船"
		},
		{
			categoryName: CONST.P5
			, categoryClass: "tag tagP5"
			, targetName: "prcEmit"
			, targetHref: "prcEmit/"
			, date: "2013/7"
			, body: "A Black Ball emits Particles"
			, note: "Keywords : Particle, Glow, Pixels, and sinθ&cosθ"
			, imgSrc: "img/Emit.png"
			, imgAlt: ""
		},
		{
			categoryName: CONST.P5
			, categoryClass: "tag tagP5"
			, targetName: "prcScroll"
			, targetHref: "prcScroll/"
			, date: "2013/6"
			, body: "Infinite Scroll to the Right"
			, note: "Keywords : Scroll on Canvas, Parallax, Noise"
			, imgSrc: "img/Scroll.png"
			, imgAlt: ""
		},
		{
			categoryName: CONST.P5
			, categoryClass: "tag tagP5"
			, targetName: "prcFirefly"
			, targetHref: "prcFirefly/"
			, date: "2013/6"
			, body: "Fireflies above a Stream."
			, note: "Keywords : Particle, Glow, Pixels"
			, imgSrc: "img/Firefly.png"
			, imgAlt: "薄暮の小川にゆらめくホタルの光"
		},
		{
			categoryName: CONST.P5
			, categoryClass: "tag tagP5"
			, targetName: "prcBalls"
			, targetHref: "prcBalls/"
			, date: "2013/6"
			, body: "An example of Processing code."
			, note: "Keywords : Math & Physics"
			, imgSrc: "img/Balls.png"
			, imgAlt: ""
		},
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "jsMaze"
			, targetHref: "jsMaze/"
			, date: "2013/5"
			, body: "A bat goes through a maze! (JavaScript MVC SVG Example)"
			, note: "Keywords : グラフデータ構造, MVC, SVG"
			, imgSrc: "img/Maze.png"
			, imgAlt: ""
		},
		{
			categoryName: CONST.JS
			, categoryClass: "tag tagJS"
			, targetName: "jsID3"
			, targetHref: "jsID3/"
			, date: "2013/4"
			, body: "I tried reading ID3 tags in MP3 files."
			, note: "Keywords : バイナリデータ, 文字コード変換, Base64変換"
			, imgSrc: "img/ID3.png"
			, imgAlt: ""
		}
	];
	return dataset;
}

//--------------------------------------------------
function drawArticles(elEd, dataset) {
	var entries = d3.select(elEd)
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
			.on("click", function(d) {
				//ga('send', 'event', 'article', 'click', d.targetName + "_str");
			})
			.text(d.targetName);
		entry.append("p")
			.attr("class", "date")
			.text(d.date);
		entry.append("p")
			.text(d.body);
		entry.append("p")
			.attr("class", "note")
			.text(d.note);

		if (d.imgSrc) {
			entry.append("a")
			.attr("target", "_blank")
			.attr("href", d.targetHref)
			.on("click", function(d) {
				//ga('send', 'event', 'article', 'click', d.targetName + "_img");
			})
			.append("img")
			.attr("src", d.imgSrc)
			.attr("alt", d.imgAlt);
		}
	});
}

})();
