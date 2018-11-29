// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
var quiz=[{
    question:"In what country would you find shish kebab as an everyday food?",
    answers:["Turkey","China","Chile","Palau"],
    correct:"Turkey",
    image:"../images/answer1.jpeg"
},
{
    question:"What country is renowned for chocolate?",
    answers:["Finland","Venezuela","Belgium","Argentina"],
    correct:"Belgium",
    image:"../images/answer2.jfif"
},
{
    question:"To what country is the mung bean native?",
    answers:["India","Italy","Ireland","Indonesia"],
    correct:"India",
    image:"../images/answer3.png"
},
{
    question:"What country does the word \"mocha\" come from?",
    answers:["Tonga","Saudi Arabia","Yemen","Pakistan"],
    correct:"Yemen",
    image:"../images/answer4.jpeg"
},
{
    question:"If you were eating mole poblano, you would most likely be in what country?",
    answers:["China","Italy","Tanzania","Mexico"],
    correct:"Mexico",
    image:"../images/answer5.jpeg"
},
{
    question:"In Japanese cooking, what is nori?",
    answers:["Noodles","rice","Seaweed","Egg"],
    correct:"Seaweed",
    image:"../images/answer6.jpeg"
},
{
    question:"What is the primary ingredient of arancini?",
    answers:["Mozzarella","Rice","Ham","potato"],
    correct:"Rice",
    image:"../images/answer7.jpeg"
},
{
    question:"Where is the busiest McDonald's in the world?",
    answers:["Munich","Tokyo","New York","Italy"],
    correct:"Munich",
    image:"../images/answer8.jpeg"
},
{
    question:"What's the unhealthiest burger in America, according to Men's Health magazine?",
    answers:["the Baconator from Wendy's","the Double Six Dollar Burger from Carl's Jr.","the Monster Thickburger from Hardee's"],
    correct:"the Double Six Dollar Burger from Carl's Jr.",
    image:"../images/answer9.jpeg"
},
{
    question:"Which of the following is the most common pizza topping?",
    answers:["Pepperoni","Sausage","mushrooms","onions"],
    correct:"Pepperoni",
    image:"../images/answer10.jpeg"
},
{
    question:"Haggis is made from the heart, lungs, liver and stomach of which animal?",
    answers:["Sheep","Cow","Pig","lamb"],
    correct:"Sheep",
    image:"../images/answer11.jpeg"
},
{
    question:"Plantain is similar to which common fruit?",
    answers:["Banana","Avocado","Pomegranate","Apple"],
    correct:"Banana",
    image:"../images/answer12.jpeg"
},
{
    question:"Which of these countries is not a major producer of oranges?",
    answers:["Italy","Iceland","Brazil","Japan"],
    correct:"Iceland",
    image:"../images/answer13.png"
},
{
    question:"Which country does Gorgonzola cheese come from?",
    answers:["France","Spain","Italy","Japan"],
    correct:"Italy",
    image:"../images/answer14.jpeg"
},
{
    question:"Which of these nuts should you always find in a Waldorf salad?",
    answers:["Brazils","Almonds","Walnuts","Peanuts"],
    correct:"Walnuts",
    image:"../images/answer15.jpeg"
}];
var i=0;
// function to display question on screen
function displayQuestion(){
   $("#quizArea").html(quiz[i].question+"<br><br>"); 
    for(var j=0 ; j < quiz[i].answers.length ; j++){
       $("#quizArea").append((j+1)+". "+quiz[i].answers[j]+"<br>");
    } 

}
$(document).ready(function(){
    $("#play1").on("click",function(){
        $("#play1").hide();
        console.log("hello");
        displayQuestion();
    });
    
});
