var quizQuestions = [
{
	question: "1. Inside which HTML element do we put the JavaScript?",
	answers: {
		a: "javascript",
		b: "js",
		c: "script",
		d: "scripting"
	},
	correctAnswer: "c"
},
{
	question: "2. What is the correct JavaScript syntax to write 'Hello World' to the document?",
	answers: {
		a: "response.write('Hello World')",
		b: "'Hello World'",
		c: "document.write('Hello World')",
		d: "('Hello World')"
	},
	correctAnswer: "c"
},
{
	question: "3. Where is the correct place to insert a JavaScript?",
	answers: {
		a: "both the <head> section and the <body> section",
		b: "the <body> section",
		c: "the <head> section",
		d: "all of the above"
	},
	correctAnswer: "d"
},
{
	question: "4. What is the correct syntax for referring to an external script called 'xxx.js'?",
	answers: {
		a: "script src='xxx.js'",
		b: "script name='xxx.js'",
		c: "script href='xxx.js'",
		d: "script value='xxx.js'"
	},
	correctAnswer: "a"
},
{
	question: "5. How do you create a function?",
	answers: {
		a: "function:myFunction()",
		b: "function=myFunction()",
		c: "function myFunction()",
		d: "myFunction():function"
	},
	correctAnswer: "c"
},
{
	question: "6. How do you call a function named 'myFunction'?",
	answers: {
		a: "call myFunction()",
		b: "myFunction()",
		c: "call function myFunction",
		d: "Call.myFunction()"
	},
	correctAnswer: "b"
},
{
	question: "7. How do you write a conditional statement for executing some statements only if 'i' is equal to 5?",
	answers: {
		a: "if i==5 then",
		b: "if (i==5)",
		c: "if (i=5)",
		d: "if i=5 then"
	},
	correctAnswer: "b"
},
{
	question: "8. How many looping statements are there in JavaScript?",
	answers: {
		a: "2",
		b: "4",
		c: "3",
		d: "1"
	},
	correctAnswer: "c"
},
{
	question: "9. How does a 'for' loop start?",
	answers: {
		a: "for (i = 0; i <= 5)",
		b: "for (i = 0; i <= 5; i++)",
		c: "for i = 1 to 5",
		d: "for (i <= 5; i++)"
	},
	correctAnswer: "b"
},
{
	question: "10. How can you add a comment in a JavaScript?",
	answers: {
		a: "//This is a comment ",
		b: "'This is a comment",
		c: "!--This is a comment--!",
		d: "#This is a comment"
	},
	correctAnswer: "a"
},
];

var timer = 100;
var intervalId;
var timerRunning = false;

function decrement() {
      timer--;
      $("#timer").text(timer);
      if (timer === 0) {
        stop();
        alert("Time Up!");
      }
    }

function stop() {

      clearInterval(intervalId);
    }

function startgame() {
	
	if(timerRunning === false) {

		timerRunning = true;

		intervalId = setInterval(decrement, 1000); // starts the timer

		for (var i = 0; i < quizQuestions.length; i++){
			//create a quiz question element and append it to the "questionContainer" div
			$("#quiz").append(
				"<div id='questionContainer'> <div class='text-center' id='question'>" + quizQuestions[i].question + "</div> <div class='radio text-center'> <label><input type='radio' name='optradio'>" + quizQuestions[i].answers.a + "</label> </div> <div class='radio text-center'> <label><input type='radio' name='optradio'>" + quizQuestions[i].answers.b + "</label> </div> <div class='radio text-center'> <label><input type='radio' name='optradio'>" + quizQuestions[i].answers.c + "</label> </div> <div class='radio text-center'> <label><input type='radio' name='optradio'>" + quizQuestions[i].answers.d + "</label> </div> </div>"		
			);
		}//end of for loop
			$("#quiz").append("<button type='button' class='btn btn-default center-block' id='submit'>Submit Quiz</button>");
			$(document).on("click", "#submit", function() {
				alert("done");
				stop();
			});
	}//end of if statement


}



$("#getStarted").on("click", startgame);

$("#submit").on("click", function() {
//get quiz results
//display result on page
});