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
    image:"assets/images/answer1.jpg",
    desc:"Shish kebab is found as an everyday food in Turkey"
},
{
    question:"What country is renowned for chocolate?",
    answers:["Finland","Venezuela","Belgium","Argentina"],
    correct:"Belgium",
    image:"assets/images/answer2.jfif",
    desc:"Belgium is renowned for chocolate"
},
{
    question:"To what country is the mung bean native?",
    answers:["India","Italy","Ireland","Indonesia"],
    correct:"India",
    image:"assets/images/answer3.png",
    desc:"mung bean is native to India"
},
{
    question:"What country does the word \"mocha\" come from?",
    answers:["Tonga","Saudi Arabia","Yemen","Pakistan"],
    correct:"Yemen",
    image:"assets/images/answer4.jpg",
    desc:"mocha comes from the Yemen country"
},
{
    question:"If you were eating mole poblano, you would most likely be in what country?",
    answers:["China","Italy","Tanzania","Mexico"],
    correct:"Mexico",
    image:"assets/images/answer5.jpg",
    desc:"If you were eating mole poblano, you would most likely be in Mexico"
},
{
    question:"In Japanese cooking, what is nori?",
    answers:["Noodles","rice","Seaweed","Egg"],
    correct:"Seaweed",
    image:"assets/images/answer6.jpg",
    desc:"nori is seaweed in Japanese cooking"
},
{
    question:"What is the primary ingredient of arancini?",
    answers:["Mozzarella","Rice","Ham","potato"],
    correct:"Rice",
    image:"assets/images/answer7.jpg",
    desc:"rice is the primary ingredient of arancini"
},
{
    question:"Where is the busiest McDonald's in the world?",
    answers:["Munich","Tokyo","New York","Italy"],
    correct:"Munich",
    image:"assets/images/answer8.jpeg",
    desc:"The busiest McDonald's in the world is in Munich"
},
{
    question:"What's the unhealthiest burger in America, according to Men's Health magazine?",
    answers:["the Baconator from Wendy's","the Double Six Dollar Burger","Bacon, Egg and Cheese Croissan’Wich","the Monster Thickburger from Hardee's"],
    // correct:"the Double Six Dollar Burger from Carl's Jr.",
    correct:"the Double Six Dollar Burger",
    image:"assets/images/answer9.jpg",
    desc:"the Double Six Dollar Burger from Carl's Jr. is the unhealthiest burger in America, according to Men's Health magazine"
},
{
    question:"Which of the following is the most common pizza topping?",
    answers:["Pepperoni","Sausage","mushrooms","onions"],
    correct:"Pepperoni",
    image:"assets/images/answer10.jpeg",
    desc:"Pepperoni is the most common pizza topping"
},
{
    question:"Haggis is made from the heart, lungs, liver and stomach of which animal?",
    answers:["Sheep","Cow","Pig","lamb"],
    correct:"Sheep",
    image:"assets/images/answer11.jpg",
    desc:"Haggis is made from the heart, lungs, liver and stomach of Sheep"
},
{
    question:"Plantain is similar to which common fruit?",
    answers:["Banana","Avocado","Pomegranate","Apple"],
    correct:"Banana",
    image:"assets/images/answer12.jpg",
    desc:"Plantain is similar to Banana"
},
{
    question:"Which of these countries is not a major producer of oranges?",
    answers:["Italy","Iceland","Brazil","Japan"],
    correct:"Iceland",
    image:"assets/images/answer13.png",
    desc:"Iceland is not a major producer of oranges"
},
{
    question:"Which country does Gorgonzola cheese come from?",
    answers:["France","Spain","Italy","Japan"],
    correct:"Italy",
    image:"assets/images/answer14.jpg",
    desc:"Gorgonzola cheese come from Italy"
},
{
    question:"Which of these nuts should you always find in a Waldorf salad?",
    answers:["Brazils","Almonds","Walnuts","Peanuts"],
    correct:"Walnuts",
    image:"assets/images/answer15.jpg",
    desc:"Walnuts are always find in a Waldorf salad"
}];
var i=0;
var userAnswer=null;
var totalCorrect=0;
var totalIncorrect=0;
var totalQuestions=quiz.length;
var time=30;
var intervalId;
var clockRunning=false;

function count(){
    time--;
    $("#displayTime").text("Time = "+time);
    if(time === 0){
        clearInterval(intervalId);
        clockRunning=false;
        timeUp();
    }
}
// function to display question on screen
function displayQuestion(){
   $("#quizArea").html((i+1)+". "+quiz[i].question+"<br><br>"); 
    for(var j=0 ; j < quiz[i].answers.length ; j++){
        var listOfAnswers=$("<li id='bt"+[j]+"' data-name='"+quiz[i].answers[j]+"'>"+quiz[i].answers[j]+"</li>");
       $("#quizArea").append(listOfAnswers);
    } 
    if(!clockRunning){
        intervalId=setInterval(count,1000);
        clockRunning=true;
    }
    $("#bt0,#bt1,#bt2,#bt3").on("click",function(){
        console.log("clcik event run");
        clearInterval(intervalId);
        clockRunning=false;
        $("#displayTime").text("Time");
        userAnswer=$(this).attr("data-name");
        console.log(userAnswer);
        console.log(quiz[i].correct);
        matchUserAnswer();     
    });
}
function matchUserAnswer(){
    if(userAnswer === quiz[i].correct){
        correctFunction();
    }
    else{
        inCorrectFunction();
    }
}
function correctFunction(){
    $("#quizArea").empty();
    totalCorrect++;
    $("#quizArea").append("CORRECT: <br><br>"+quiz[i].desc).append("<br><img src = '"+quiz[i].image+"' alt='not found'>");
    i++;
    time=30;
    if(i === quiz.length)
    {
        setTimeout(result,4000);
    }
    else
    {
    setTimeout(displayQuestion,4000);
    }
}
function inCorrectFunction(){
    $("#quizArea").empty();
    totalIncorrect++;
    $("#quizArea").append("INCORRECT: <br><br>"+quiz[i].desc).append("<br><img src = '"+quiz[i].image+"' alt='not found'>");
    i++;
    time=30;
    // displayQuestion();
    setTimeout(displayQuestion,4000);
}
function timeUp(){
    $("#quizArea").empty();
    totalIncorrect++;
    $("#quizArea").append("OOPS! TIME UP: <br><br>"+quiz[i].desc).append("<br><img src = '"+quiz[i].image+"' alt='not found'>");
    i++;
    time=30;
    // displayQuestion();
    setTimeout(displayQuestion,4000);
}
function result(){
    $("#quizArea").empty();
    $("#quizArea").append("Total Questions = "+totalQuestions+"<br>Correct Answers = "+totalCorrect+"<br>Incorrect Answers = "+totalIncorrect);
}
$(document).ready(function(){
    $("#play1").on("click",function(){
        $("#play1").hide();
        console.log("hello");
        displayQuestion();
    });
});
