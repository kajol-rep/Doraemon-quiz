const chalk = require('chalk');
const error = chalk.bold.red;
const right = chalk.bold.green;

var readlinesync = require("readline-sync");
console.log(chalk.black.bgYellowBright.bold("LETS GET STARTED --->"));
var username = readlinesync.question(chalk.cyanBright.bold("\nWhat is your name? \n"));
console.log(chalk.blueBright.bold.italic("\nWELCOME " + username + "! LETS PAY THE DORAEMON QUIZ"));
var score=0;
function game(question,answer){
  
  var useranswer = readlinesync.question(chalk.hex('#DEADED').bold(question));
  
  if(useranswer.toUpperCase()===answer.toUpperCase()){
    console.log(right("\nGood job you are right!!"));
    score = score+1;
  }
  else{
    console.log(error("\nOOPS you are wrong!!"));
  }
  
}
function updatescoreboard(score,highscore){

  if(score>=highscores[0].score){
    
  
    highscores.push({
    name:   username,
    score: score
});
console.log(chalk.yellowBright.bold("Congratulations you have beaten the highest score!"))
  }

}

const questions = [
  {
    question: `
  What is the colour of Doraemon? 
  a. Yellow
  b. Green
  c. Blue
  d. Pink\n`,
    answer: "c"
  },
  {
    question: `
  What is the name of doraemon's crush?
  a. Shizuka
  b. Me-Chaan
  c. Saki
  d. Umiko\n`,
    answer:"b"
  },
  {
    question: `
  What is name of the gadget that can be used to reach from one place to another in a second?
  a. Bamboo copter
  b. Satelite lift
  c. Anywhere door
  d. Pinch runner\n`,
    answer:"c"
  },
  {
    question: `
  Where does doraemon keep its gadgets?
  a. 4D pocket
  b. Mystery box
  c. Cave
  d. Home\n`,
    answer:"a"
  }
  
];

var highscores= [
  {
    name:"kajol",
    score: 4,
  }
]
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  game(currentQuestion.question,currentQuestion.answer);
  console.log("-------------------------")
}
console.log(chalk.black.bgMagentaBright.bold("\nYAY! your score is: " + score));
updatescoreboard(score,highscores);
var userselect = readlinesync.question(chalk.yellow.bold("\nWant to see score board?.. enter Yes/No \n"));

if(userselect.toUpperCase()==='YES'){
  
  console.table(highscores);
}
console.log(chalk.yellowBright.bold("\nThank You For Playing The Quiz " + username));
