// set question
const question = [
  {
    question : "Which is largest animal in the world ?",
    answers :[ 
      {
          Text : "Shark" , Correct : False
        },
       {Text:"Blue Whale", Correct:true},
       {Text:"Elephant",Correct:false},
       {Text:"Giraffe",Correct:false}
      ]},
      {
      question : "Which is SMallest City in the world ?",
    answers :[ 
      {
          Text : "Vatican City" , Correct : True
        },
       {Text:"Blue Whale", Correct:False},
       {Text:"Elephant",Correct:False},
       {Text:"Giraffe",Correct:False}
      ]},
{
      question : "Which is largest Desert in the world ?",
    answers :[ 
      {
          Text : "Kalahari" , Correct : False
        },
       {Text:"Gobi", Correct:False},
       {Text:"Sahara",Correct:False},
       {Text:"Antartika",Correct:True}
      ]},
      {
      question : "Which is Smallest Continent in the world ?",
      
    answers :[ 
      {
          Text : "Asia" , Correct : False
        },
       {Text:"Austrelia", Correct:True},
       {Text:"Africa",Correct:false},
       {Text:"Artict",Correct:false}
      ]}
];

const questionElement = document.getElementById("question");
const ansButton = document.getElementById("answer-button");
const nextButton = document.getElementById("btn-next");

let currentQuestionIndex = 0;
let score = 0;

function startquiz(){
  currentQuestionIndex =0;
  score=0;
  nextButton.innerHTML= "Next";
  showQuestion();


}


function showQuestion()
{
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML= questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML=answer.Text;
    button.classList.add("btn");
    ansButton.appendChild(button);
  });
}
startquiz();