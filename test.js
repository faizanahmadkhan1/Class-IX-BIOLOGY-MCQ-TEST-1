var readLineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readLineSync.question(chalk.cyan('Enter Your Name:  '))
var mobileNo = readLineSync.question(chalk.cyan('Enter Your Father Mobile no:  '))
console.log(chalk.green("-----------------"))
console.log(chalk.blue.bold(`Welcome ${userName} to the Biology Class Test by Shahanshah Sir`))
console.log(chalk.hex('#DFFF00').underline('Thanks to Tanay Bhaiya!'))
console.log(chalk.grey("----------------"))
console.log(chalk.white.bold(`Instructions`))
console.log(chalk.grey("----------------"))
console.log(chalk.white.bold(`There are 10 Questions carrying 2 Marks Each`))
console.log(chalk.white.bold(`Enter Correct option number against question directly and press Enter for next Question.`))
console.log(chalk.white.bold(`Sharing your Score Screenshot is compulsory.`))
console.log(chalk.grey("----------------"))


console.log(chalk.white.bold(`Full Marks =20, Pass Marks=8`))
console.log(chalk.grey("----------------"))

var score = 0

var questions = [{
  question: `Which Plastids are Colourless ?
 1.Chromoplasts
 2.Chloroplast
 3.Leucoplasts
 4.All of Above`,
  faiz: "3"
},
{
  question: `An unripe green fruit changes colour when it ripens. The reason being:
 1.Chromoplasts changes to chlorophyll
 2.Chromoplasts changes to chromosomes
 3.Chromosomes changes to chromoplasts
 4.Chloroplast changes to chromoplasts`,
  faiz: "4"
},
{
  question: `The phenomenon where cytoplasms shrink in a hypertonic medium is called:
  1.Frontolysis
  2.Plasmolysis
  3.Acidolysis
  4.Allolysis`,
  faiz: "2"
},
{
  question: `________ is called the energy currency of the cell
  1.Endoplasmic reticulum
  2.Oxygen
  3.ATP
  4.Mitochondria`,
  faiz: "3"
},
{
  question: `________ is called the powerhouse of the cell
  1.Mitochondria
  2.ATP
  3.Lysosomes
  4.Red blood cells`,
  faiz: "1"
},
{
  question: ` ________ coined the term “cell.”
  1.Gorbachev
  2.Himmler
  3.Robert Hooke
  4.Anton Von Leeuwenhoek`,
  faiz: "3"
},
{
  question: `Which of the following statements is incorrect?
  1.Cytoplasm is also known as protoplasm
  2.Lysosomes are known as the suicide bags of the cell
  3.Mitochondria has its own DNA
  4.All of the above are correct`,
  faiz: "1"
},
{
  question: `Which of the following is not a function of the vacuole in plants?
  1.They store toxic metabolic wastes
  2.They help with the process of cell division
  3.They help to maintain turgidity
  4.They provide structurally support`,
  faiz: "2"
},
{
  question: `Where are the essential proteins and lipids required for cell membrane, manufactured?
  1.Lysosome
  2.Chromosomes
  3.Endoplasmic reticulum
  4.Mitochondria`,
  faiz: "3"
},
{
  question: `The process by which water moves through a semi-permeable membrane from a region of high concentration to a region of lower concentration, thereby equalizing water concentration is called:
  1.Evaporation
  2.Diffusion
  3.Osmosis
  4.None of the above`,
  faiz: "3"
}]

function play(question, faiz) {
  var userAnswer = readLineSync.question(question)
  if (userAnswer === faiz) {
    console.log(chalk.green('Well done! Correct Answer'))
    score = score + 2;
  }
  else {
    console.log(chalk.red('Oopss !!! Incorrect Answer'))
  }
  console.log("You scored " + chalk.cyanBright
    (score))
  console.log(chalk.yellow("-----------------------"))
}

for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].faiz)
}
console.log(chalk.magentaBright.bold(` ${userName} Your Final Score is:`, score))
console.log(chalk.magentaBright.bold(`Your Final Score is sent to Your Father's mobile no ${mobileNo} `))

console.log(chalk.magentaBright("Send me your score in screenshot"))
