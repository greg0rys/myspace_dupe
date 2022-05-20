// create the array that holds the songs lyrics.
// each lyric is broken down into a seperate string
const lyric = [
	"All that rah rah",
	"Never was the icon issue",
	"Harpers Bazzar? I'm covering the icon issue",
	"Yeah I got issues",
	"W, Vouge, Cosmo, I got issues"
];

// the function we will call to change the text at intervals
function loopLyric() {
	document.querySelector("#nicki").style.display = "block";
	var loopHeader = setInterval(changeText, 1430);
}

// an outside counter that will be used to get the content of each array index. this is incremented each iteration by changeText;
var index = 0;

// the worker that actaully changes the text in the element this is called by loopLyric to apply the interval.
function changeText() {
	// check to make sure that index isn't greater than the total number of indexes we have avaliable in the array; if it is reset it to 0
	index = index == lyric.length ? 0 : index;

	// set the lyric equal to the lyric at the current index
	document.querySelector("#nicki").innerHTML = lyric[index];
	// move forward to the next index.
	index++;
}

// activate it.
loopLyric();

// var para = $("<p>Hello, sir.. I think you have too many glockies</p>");

// $(para).css({
// 	color: "ghostwhite",
// 	display: "flex",
// 	alignItems: "center",
// 	textAlign: "center",
// 	flexDirection: "column",
// 	padding: 0,
// 	margin: 0
// });

// // chain a new element to some css props, and then chain it to the document by appending.
// $(
// 	"<p>Love your pussy </br> or lose your pussy, your choice... I mean it's you're pussy anyways<br/> this makes a good header area.</p>"
// )
// 	.css({
// 		margin: 0,
// 		padding: 0
// 	})
// 	.appendTo(para);

// $(".container").before(para);

/*
	lets track the size of screen viewing this page and make adjustments as needed
*/

function changeMedia(x) {
	if (x.matches) {
		document.body.style.background = "yellow";
		$(".container").css({
			gap: "4px",
			color: "black"
		});
	} else {
		document.body.style.background = "green";
	}
}

let x = window.matchMedia("(max-width: 700px)");
changeMedia(x);
x.addListener(changeMedia);

/*
 Set up the page loader 
*/
// the function the body will call with timeout
pageLoader = () => {
	var load = setTimeout(loading, 3000);
};

// the function that will handle the switch from loading to the page.
loading = () => {
	$("#loader").css("display", "none");
	$(".container").css("visibility", "visible");
};
