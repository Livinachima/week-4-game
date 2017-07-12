var scoreDisplay = 0;
var wins = 0;
var losses = 0;
var totalNum = Math.floor((Math.random()* 100) + 19);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);
var red = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);



//updates scoreDisplay in html
var scoreDisplayNum = function (){
	$('#scoreDisplay').empty();
	$('#scoreDisplay').append(scoreDisplay);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}

var arr = function (){
	if (scoreDisplay === totalNum) {
		wins = wins + 1;
		restart();
	}else if(scoreDisplay > totalNum){
		losses = losses + 1;
		restart();
	}else{
		scoreDisplayNum();
	}
}



// use the restart function
var restart = function(){
	scoreDisplay = 0;
    totalNum = Math.floor((Math.random()* 100) + 19);

	$('#totalNum').empty();
	$('#totalNum').append(totalNum);

	red = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    //alert('restart');
	scoreDisplayNum();
}

//function

$(document).ready(function(){
	
	$('#totalNum').append(totalNum);
	$('#scoreDisplay').append(scoreDisplay);
	
	$('#red').click(function(){
		scoreDisplay = scoreDisplay + red;
		arr();
	})
	$('#blue').click(function(){
		scoreDisplay = scoreDisplay + blue;
		arr();
	})
	$('#yellow').click(function(){
		scoreDisplay = scoreDisplay + yellow;
		arr();
	})
	$('#green').click(function(){
		scoreDisplay = scoreDisplay + green;
		arr();
	})
});