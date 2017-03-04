// Things we need our program to do:
// 1.    Pick a random word. (FINISHED)
// 2.    Take the player’s guess.  (FINISHED)
// 3.    Quit the game if the player wants to.
// 4.    Check that the player’s guess is a valid letter.
// 5.    Keep track of letters the player has guessed. 
// 6.    Show the player their progress.
// 7.    Finish when the player has guessed the word.

/* ---- computerChoices Array, Array length = 100 indexis ---- */

var computerChoices = ["Michael Jackson", "Prince", "Madonna", "U2", "Bruce Springsteen", "Run DMC", "Van Halen", "Public Enemy", "Billy Joel", "The Police", 
"Phil Collins", "Guns N Roses", "Def Leppard", "Janet Jackson", "George Michael Wham", "Whitney Houston", "Metallica", "N.W.A", "Dire Straits", "AC DC", "Rush",
"Iron Maiden", "Judas Priest", "Lionel Richie", "Bon Jovi", "Talking Heads", "Genesis", "REM", "Duran Duran", "Motley Crue", "The Cure", "Journey", 
"John Mellencamp", "Grandmaster Flash and The Furious Five", "REO Speedwagon", "Kool and the Gang", "LL Cool J", "Tina Turner", "Queen", "Beastie Boys", "Ozzy Osbourne", 
"The Smiths", "Huey Lewis and the News", "Bryan Adams", "Hall & Oates", "Pat Benatar", "Eric B & Rakim", "Billy Idol", "Peter Gabriel", "INXS", "Tom Petty & the Heartbreakers", 
"Stevie Ray Vaughan & Double Trouble", "Eurythmics", "The Cars", "Aerosmith", "ZZ Top", "The Rolling Stones", "Heart", "David Bowie", "Elton John", "Rod Stewart", "Foreigner", 
"Stevie Wonder", "Toto", "Bob Seger", "The Pointer Sisters", "DJ Jazzy Jeff and The Fresh Prince", "Salt N Pepa", "Fleetwood Mac", "The Go-Go’s", "Paul McCartney", 
"Pet Shop Boys", "Don Henley", "Paul Simon", "Tracy Chapman", "Cyndi Lauper", "Depeche Mode", "Sonic Youth", "Pete Townshend", "Culture Club", "Gloria Estefan and Miami Sound Machine", 
"De La Soul", "Luther Vandross", "Chicago", "The Bangles", "Thompson Twins", "Yes", "Men at Work", "Pixies", "Pink Floyd", "Robert Palmer", "Kenny Loggins", "Whitesnake", "Sade", "Steve Winwood", 
"Billy Ocean", "Tears for Fears", "Bobby Brown", "Scorpions", "Simply Red"];




/* ---- Console logs a random selection from the computerChoices Array ---- */

var computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log("Random word selected: " + computerSelection);




/* ---- Global variable used to place content inside the HTML element  ---- */

var stg = " ";





/* ---- The User Maximum Number Of Guesses  ---- */

var maximumTries = 10;





/* ---- empty array to store underscores and letters The User guesses ---- */

var answerArray = [];




/* ---- Takes computerSelection length and spaces underscores into "answerArray" ---- */

	for (var i = 0; i < computerSelection.length; i++) {

		// if an index of computerSelection contains a space
		if(computerSelection[i] === " " ) {
			
			// Insert no break charecter where there a spaces
			answerArray.push("&nbsp;");

		} else {
			
			// Insert underscores where there a letters
			answerArray.push("_ ");

		}

	}

	console.log(answerArray);




/* ---- Takes computerSelection length ---- */

	for(var i =0; i< answerArray.length; i++){
		
		// Take stg and add "answerArray" index to it
		stg+= answerArray[i];

	}

	console.log(stg);

	// Puts the output of stg into an HTML element called answer 
	document.getElementById("answer").innerHTML = stg;




/* ---- User Keyboard inputs ---- */

// onkeyup wait for an event
document.onkeyup = function(event) {

	// Make a string from a charecter code after event key press
	// gives key code or key number that is turned to lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Get computerSelection length
	for (var i = 0; i < computerSelection.length; i++) {

		// Check if computerSelection indexes are equal to the userGuess
		if(computerSelection[i].toLowerCase() === userGuess) {

				
				// This asignes anserArray index to the key the User pressed
				answerArray[i] = userGuess;
				
				console.log(answerArray)


				// Puts letter and underscores into "answer" and join removes (,)
				document.getElementById("answer").innerHTML = answerArray.join("");


			// Logs the letter the user pressed
			console.log("Contains letter: " + userGuess);


		}
	}
}