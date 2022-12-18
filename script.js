function Random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
window.alert("About the program: 'Trivia Earth' is an educational game that intends to save the world one tree at a time, while helping people improve their knowledge of life, math, english, and geography. For every 10 questions consecutively answered correctly, one tree is planted somewhere in the world. Also you buy a tree for 50 cents buy clicking the 'Golden Tree button', you can also name this tree The game was created by Joy Yang, Dylan Lai, Juan Vazquez, and Simon Lee.");
var quiz = []; 
var rand = Random(5,25);
var randy = Math.floor(Math.random()*10)+1;

var rande = (Random(2,3)+Random(1,999)/1000);
quiz[0] = new Question("In the human body, what do the parotid glands produce?", "Saliva", "Hormones", "Urine");
quiz[1] = new Question("What is the most difficult food to give up, according to dieters?", "Cheese", "Bread", "Sugar");
quiz[2] = new Question("What does QOD stand for on a prescription?", "Take Every Day", "Contains Inorganic Components", "Can Be Toxic");
quiz[3] = new Question("What is another name for Herpes zoster?", "Shingles", "Genital Warts", "Smallpox");
var rand1 = Math.floor(Math.random() * 250);
var rand2 = Math.floor(Math.random() * 200)+50;
quiz[4] = new Question("What, along with heart disease and cancer, accounts for 64 percent of U.S. deaths?", "Strokes", "Accidents", "Suicides");
quiz[5] = new Question("Which medical tool was developed by Sanctorius in 1612?", "thermometer", "stethoscope", "forceps");
quiz[6] = new Question("What were the first false teeth made from?", "ivory", "wood", "stone");
quiz[7] = new Question("Where is your zygomatic bone located?", "in your cheek", "in your arm", "in your shoulder");
quiz[8] = new Question("How is Legionnaire\'s disease spread?", "small water droplets", "through the air", "through physical contact");
quiz[9] = new Question("What condition does a lack of vitamin B1 cause?", "Beri beri", "Stunted Growth", "Progeria");
quiz[10] = new Question("What human body part is replaced every three months?", "Eyelashes", "Nails", "Skin");
quiz[11] = new Question("What is trypanophobia the fear of?", "Shots", "Holes", "Darkness");
quiz[12] = new Question("What is an anomaloscope used for?", "Color Blindness", "Bone Fractures", "Brain Diseases");
quiz[13] = new Question("What does it mean to be Hypermetropic?", "Far-sighted", "ADHD", "Super Jumpy");

var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];

}

function answerA_clicked() {
  answerA = document.getElementById("answerA").value;
  checkAnswer(answerA);
  rand = Random(5,25);
  randy = Math.floor(Math.random()*10)+1;
  rand1 = Math.floor(Math.random() * 250);
  rand2 = Math.floor(Math.random() * 200)+50;
  rande = Random(2,3)+Random(1,999)/1000;
}

function answerB_clicked() {
  answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
  rand = Random(5,25);
  randy = Math.floor(Math.random()*10)+1;
  rand1 = Math.floor(Math.random() * 250);
  rand2 = Math.floor(Math.random() * 200)+50;
  rande = Random(2,3)+Random(1,999)/1000;
}
function answerC_clicked() {
  answerC = document.getElementById("answerC").value;
	checkAnswer(answerC);
  rand = Random(5,25);
  randy = Math.floor(Math.random()*10)+1;
  rand1 = Math.floor(Math.random() * 250);
  rand2 = Math.floor(Math.random() * 200)+50;
  rande = Random(2,3)+Random(1,999)/1000;
}

function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {

    currentScore+=0.1;
  } else {
    currentScore=Math.floor(currentScore);
  } 
  document.getElementById("score").innerHTML = currentScore.toFixed(2); 
}

function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
  
  } else { 

    adjustScore(false);
    btnProvideQuestion();
  }	  
}

function changeColor() {
  document.getElementById("myH2").style.color = "green";
}