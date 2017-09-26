
$(document).ready(function() {


	// var compGenNum = ""
	var compNum = Math.floor(Math.random() * (120 - 19)) + 19;
	var tally = 0
	var wins = 0
	var losses = 0	
	
		



	function reWriteStats() {
	
		console.log("tally is: " + tally);
		console.log("Wins: " + wins);
		console.log("Losses: " + losses);
		console.log("____________");	
		console.log("random number is " + compNum);
		$('#comp-result').html('<h1>' + compNum + '</h1>');
	}
	
	reWriteStats();
   
		
	
	function btnAssignment() {
		var btnVal1 = Math.floor(Math.random() * 12 + 1);
		var btnVal2 = Math.floor(Math.random() * 12 + 1);
		var btnVal3 = Math.floor(Math.random() * 12 + 1);
		var btnVal4 = Math.floor(Math.random() * 12 + 1);
		
		$('#button-1').attr('data-num', btnVal1)
		$('#button-2').attr('data-num', btnVal2)
		$('#button-3').attr('data-num', btnVal3)
		$('#button-4').attr('data-num', btnVal4)

				

		$('#button-1').on('click', function() {
		tally += btnVal1;
		console.log("button 1 value is " + btnVal1);
		$('#YourNumber').html('<h1>' + tally + '</h1>');
		reWriteStats();
		winOrLose();
		// console.log("score is " + tally);
		
		
		})
		$('#button-2').on('click', function() {
		tally += btnVal2;
		$('#YourNumber').html('<h1>' + tally + '</h1>');
		console.log("button 2 value is " + btnVal2);
		reWriteStats();
		winOrLose();
		// console.log("score is " + tally);
		
		
		})

		$('#button-3').on('click', function() {
		tally += btnVal3;
		
		console.log("button 3 value is " + btnVal3);
		reWriteStats();
		winOrLose();
		// console.log("score is " + tally);
		$('#YourNumber').html('<h1>' + tally + '</h1>');
		
		})

		$('#button-4').on('click', function() {
		tally += btnVal4;
		
		console.log("button 4 value is " + btnVal4);
		reWriteStats();
		winOrLose();
		// console.log("score is " + tally);
		
		$('#YourNumber').html('<h1>' + tally + '</h1>');
		})

	};

btnAssignment();

function winOrLose () {
	if (tally === compNum) {
				wins++;
				console.log("Wins: " + wins);
				alert("You matched! You win!");
				$('#win-count').html(wins);
				$('#win-state').html(" You Won!");
				newRandNum();
			

			} 
			else if (tally >= compNum) {
				losses++;
				console.log("Losses: " + losses);
				alert("You went over... You lose");
				$('#lose-count').html(losses);
				$('#win-state').html(" You lost!");

				newRandNum();
				// $('#comp-result').html('<h1>' + newRando + '</h1>');
		}

}

function newRandNum() {
	var newRando = Math.floor(Math.random() * (120 - 19)) + 19;
	console.log("new number should be: " + newRando);
	$('#comp-result').html('<h1>' + newRando + '</h1>');
	tally = 0;
	// compNum = 50;
	
}

// function resetGame() {
// if (winOrLose();){
// 	 newRandom();
	 	
// }

// }









}); //end of document.ready





