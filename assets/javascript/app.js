var quizQuestions = [
{
	question: "question example",
	answers: {
		a: "a",
		b: "b",
		c: "c",
		d: "d"
	},
	correctAnswer: ""
},
{
	question: "",
	answers: {
		a: "",
		b: "",
		c: "",
		d: ""
	},
	correctAnswer: ""
},
{
	question: "",
	answers: {
		a: "",
		b: "",
		c: "",
		d: ""
	},
	correctAnswer: ""
},
{
	question: "",
	answers: {
		a: "",
		b: "",
		c: "",
		d: ""
	},
	correctAnswer: ""
},
{
	question: "",
	answers: {
		a: "",
		b: "",
		c: "",
		d: ""
	},
	correctAnswer: ""
},
{
	question: "",
	answers: {
		a: "",
		b: "",
		c: "",
		d: ""
	},
	correctAnswer: ""
},
{
	question: "",
	answers: {
		a: "",
		b: "",
		c: "",
		d: ""
	},
	correctAnswer: ""
},
{
	question: "",
	answers: {
		a: "",
		b: "",
		c: "",
		d: ""
	},
	correctAnswer: ""
},
{
	question: "",
	answers: {
		a: "",
		b: "",
		c: "",
		d: ""
	},
	correctAnswer: ""
},
{
	question: "",
	answers: {
		a: "",
		b: "",
		c: "",
		d: ""
	},
	correctAnswer: ""
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

		intervalId = setInterval(decrement, 1000); // starts the timer

		for (var i = 0; i < quizQuestions.length; i++){
			//create a quiz question element and append it to the "questionContainer" div
			$("#quiz").append(
				"<div id='questionContainer'> <div class='text-center' id='question'>" + quizQuestions[i].question + "</div> <div class='radio text-center'> <label><input type='radio' name='optradio'>" + quizQuestions[i].answers.a + "</label> </div> <div class='radio text-center'> <label><input type='radio' name='optradio'>" + quizQuestions[i].answers.b + "</label> </div> <div class='radio text-center'> <label><input type='radio' name='optradio'>" + quizQuestions[i].answers.c + "</label> </div> <div class='radio text-center'> <label><input type='radio' name='optradio'>" + quizQuestions[i].answers.d + "</label> </div> </div>"		
			);
		}//end of for loop
	}//end of if statement

}

$("#getStarted").on("click", startgame);

$("#submit").on("click", function() {
//get quiz results
//display result on page
});