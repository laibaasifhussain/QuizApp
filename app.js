var questions = [
    {
        question: 'HTML stands for_______________________',
        options: ["HTML" , "HTML" , "Hpyer Text Markup Language" , "Abc"],
        correctAnswer: "Hpyer Text Markup Language",
    },
    // {
    //     question: 'Choose the correcet HTML element for the largest heading __________',
    //     options: ["<h1>", "<head>", "<heading>", "ABC"],
    //     correctAnswer: "<h1>",
    // },
    {
        question: 'CSS stands for_______________________',
        options: ["HTML" , "Casending Style Sheet" , "Hpyer Text Markup Language" , "Abc"],
        correctAnswer:"Casending Style Sheet" ,
    },
    {
        question: 'JS stands for_______________________',
        options: ["appJS" , "Casending Style Sheet" , "Hpyer Text Markup Language" , "JavaScript"],
        correctAnswer: "JavaScript",
    },
    // {
    //     question: 'Inside which HTML element do we put the JavaScript?',
    //     options: ["<js>" , "<javascript>" , "<script>" , "<scripting>"],
    //     correctAnswer: "<script>",
    // },
    {
        question: 'RAM stands for_______________________',
        options: ["Read as Memory" , "Random Access Memory" , "Hpyer Text Markup Language" , "Abc"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: 'ROM stands for_______________________',
        options: ["CSS" , "Random Access Memory" , "Read Only Memory" , "Abc"],
        correctAnswer:"Read Only Memory",
    },
    {
        question: '<body> is this an opening tag or a closing tag ______________________',
        options: ["No", "Yes",],
        correctAnswer: "Yes",
    },

    {
        question: 'How do you declare a JavaScript variable __________________',
        options: ["variable carname", "var carName", "v carName", "none of these"],
        correctAnswer: "var carName",
    },
    {
        question: 'How many tags are in a regular element __________________',
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
    },

    // {
    //     question: 'What is the correct HTML element  for inserting a line break __________',
    //     options: ["<break", "<br>", "Abc", "<lb>"],
    //     correctAnswer:"<br>" ,
    // },

    {
        question: 'SQL stands for _________________________',
        options: ["Structured Query Language", "Random Access Memory", "Central Superior Service", "ABC"],
        correctAnswer: "Structured Query Language",
    },
]



var displayQuestion = document.getElementById("displayQuestion");
var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionNumber = document.getElementById("totalQuestionNumber");
var optionParent= document.getElementById("optionParent");


var indexVal = 0;
var mark = 0;


function renderQuestion(){
var que = questions[indexVal];
displayQuestion.innerHTML = que.question;
totalQuestionNumber.innerHTML = questions.length;
currentQuestionNumber.innerHTML = indexVal + 1;


optionParent.innerHTML="";
for ( var i = 0; i < que.options.length; i++){
    optionParent.innerHTML += `<div class="col-md-6">
    <button onclick="checAns('${que.correctAnswer}' , '${que.options[i]}')" class="w-100">
    ${que.options[i]}
    </button>
</div>`
}
}

function nextQue(){
    indexVal++;
    renderQuestion();
}

function checAns(a,b){
    if (a==b){
        marks = mark + 1;
        console.log(a,b);
        console.log(marks);
        nextQue();
    }
}

renderQuestion();


