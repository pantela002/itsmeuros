const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
      question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
      imgsrc: "reci/on.png",
      choice1: "Ovo je reč 'on'",
      choice2: "Ovo je reč 'jutro'",
      choice3: "Ovo je reč 'tamo'",
      choice4: "Ovo je reč 'smešno'",
      answer: 1
    },
    {
      question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
      imgsrc: "reci/ovde.png",
      choice1: "Ovo je reč 'pita'",
      choice2: "Ovo je reč 'svađa'",
      choice3: "Ovo je reč 'ovde'",
      choice4: "Ovo je reč 'tamo'",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "reci/pita.png",
      choice1: "Ovo je reč 'zaboravio'",
      choice2: "Ovo je reč 'učitelj'",
      choice3: "Ovo je reč 'trpeti'",
      choice4: "Ovo je reč 'pita'",
      answer: 4
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "reci/smesno.png",
      choice1: "Ovo je reč 'tamo'",
      choice2: "Ovo je reč 'smešno'",
      choice3: "Ovo je reč 'on'",
      choice4: "Ovo je reč 'jutro'",
      answer: 2
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "reci/svadja.png",
      choice1: "Ovo je reč 'on'",
      choice2: "Ovo je reč 'ovde'",
      choice3: "Ovo je reč 'svađa'",
      choice4: "Ovo je reč 'jutro'",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "reci/tamo.png",
      choice1: "Ovo je reč 'učitelj'",
      choice2: "Ovo je reč 'pita'",
      choice3: "Ovo je reč 'trpeti'",
      choice4: "Ovo je reč 'tamo'",
      answer: 4
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "reci/jutro.png",
      choice1: "Ovo je reč 'ovde'",
      choice2: "Ovo je reč 'jutro'",
      choice3: "Ovo je reč 'smešno'",
      choice4: "Ovo je reč 'svađa'",
      answer: 2
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "reci/trpeti.png",
      choice1: "Ovo je reč 'smešno'",
      choice2: "Ovo je reč 'zaboravio'",
      choice3: "Ovo je reč 'on'",
      choice4: "Ovo je reč 'trpeti'",
      answer: 4
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "reci/ucitelj.png",
      choice1: "Ovo je reč 'trpeti'",
      choice2: "Ovo je reč 'svađa'",
      choice3: "Ovo je reč 'učitelj'",
      choice4: "Ovo je reč 'jutro'",
      answer: 3
    },
   
     
   
  ];



//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 8;
let nesto;
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
 if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("endreci.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  nesto=questionIndex;
  currentQuestion = availableQuesions[questionIndex];
  document.getElementById("question-image").setAttribute("src", currentQuestion.imgsrc);

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
        availableQuesions.splice(nesto, 1);
        incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};


startGame();
