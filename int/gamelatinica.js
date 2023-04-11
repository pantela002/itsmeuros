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
      imgsrc: "abeceda/a.jpg",
      choice1: "Ovo je slovo A",
      choice2: "Ovo je slovo G",
      choice3: "Ovo je slovo K",
      choice4: "Ovo je slovo O",
      answer: 1
    },
    {
      question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
      imgsrc: "abeceda/b.jpg",
      choice1: "Ovo je slovo T",
      choice2: "Ovo je slovo E",
      choice3: "Ovo je slovo B",
      choice4: "Ovo je slovo R",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/c.jpg",
      choice1: "Ovo je slovo T",
      choice2: "Ovo je slovo E",
      choice3: "Ovo je slovo K",
      choice4: "Ovo je slovo V",
      answer: 4
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/g.PNG",
      choice1: "Ovo je slovo I",
      choice2: "Ovo je slovo G",
      choice3: "Ovo je slovo Z",
      choice4: "Ovo je slovo U",
      answer: 2
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/d.PNG",
      choice1: "Ovo je slovo B",
      choice2: "Ovo je slovo O",
      choice3: "Ovo je slovo D",
      choice4: "Ovo je slovo E",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/đ.PNG",
      choice1: "Ovo je slovo C",
      choice2: "Ovo je slovo D",
      choice3: "Ovo je slovo M",
      choice4: "Ovo je slovo Đ",
      answer: 4
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/e.PNG",
      choice1: "Ovo je slovo H",
      choice2: "Ovo je slovo E",
      choice3: "Ovo je slovo B",
      choice4: "Ovo je slovo N",
      answer: 2
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/ž.PNG",
      choice1: "Ovo je slovo Z",
      choice2: "Ovo je slovo F",
      choice3: "Ovo je slovo Dž",
      choice4: "Ovo je slovo Ž",
      answer: 4
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/z.PNG",
      choice1: "Ovo je slovo Ž",
      choice2: "Ovo je slovo H",
      choice3: "Ovo je slovo Z",
      choice4: "Ovo je slovo S",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/i.PNG",
      choice1: "Ovo je slovo I",
      choice2: "Ovo je slovo J",
      choice3: "Ovo je slovo T",
      choice4: "Ovo je slovo G",
      answer: 1
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/j.PNG",
      choice1: "Ovo je slovo L",
      choice2: "Ovo je slovo S",
      choice3: "Ovo je slovo P",
      choice4: "Ovo je slovo J",
      answer: 4
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/k.PNG",
      choice1: "Ovo je slovo U",
      choice2: "Ovo je slovo K",
      choice3: "Ovo je slovo E",
      choice4: "Ovo je slovo R",
      answer: 2
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/l.PNG",
      choice1: "Ovo je slovo J",
      choice2: "Ovo je slovo U",
      choice3: "Ovo je slovo L",
      choice4: "Ovo je slovo R",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/lj.PNG",
      choice1: "Ovo je slovo Lj",
      choice2: "Ovo je slovo E",
      choice3: "Ovo je slovo J",
      choice4: "Ovo je slovo L",
      answer: 1
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/m.PNG",
      choice1: "Ovo je slovo N",
      choice2: "Ovo je slovo E",
      choice3: "Ovo je slovo M",
      choice4: "Ovo je slovo J",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/n.PNG",
      choice1: "Ovo je slovo T",
      choice2: "Ovo je slovo D",
      choice3: "Ovo je slovo Nj",
      choice4: "Ovo je slovo N",
      answer: 4
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/nj.PNG",
      choice1: "Ovo je slovo P",
      choice2: "Ovo je slovo N",
      choice3: "Ovo je slovo Nj",
      choice4: "Ovo je slovo V",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/o.PNG",
      choice1: "Ovo je slovo O",
      choice2: "Ovo je slovo J",
      choice3: "Ovo je slovo P",
      choice4: "Ovo je slovo A",
      answer: 1
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/p.PNG",
      choice1: "Ovo je slovo R",
      choice2: "Ovo je slovo F",
      choice3: "Ovo je slovo P",
      choice4: "Ovo je slovo J",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/r.PNG",
      choice1: "Ovo je slovo R",
      choice2: "Ovo je slovo B",
      choice3: "Ovo je slovo G",
      choice4: "Ovo je slovo N",
      answer: 1
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/s.PNG",
      choice1: "Ovo je slovo C",
      choice2: "Ovo je slovo Š",
      choice3: "Ovo je slovo E",
      choice4: "Ovo je slovo S",
      answer: 4
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/t.PNG",
      choice1: "Ovo je slovo T",
      choice2: "Ovo je slovo J",
      choice3: "Ovo je slovo E",
      choice4: "Ovo je slovo Ć",
      answer: 1
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/ć.jpg",
      choice1: "Ovo je slovo K",
      choice2: "Ovo je slovo Ć",
      choice3: "Ovo je slovo Č",
      choice4: "Ovo je slovo E",
      answer: 2
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/u.PNG",
      choice1: "Ovo je slovo E",
      choice2: "Ovo je slovo V",
      choice3: "Ovo je slovo U",
      choice4: "Ovo je slovo I",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/f.PNG",
      choice1: "Ovo je slovo H",
      choice2: "Ovo je slovo E",
      choice3: "Ovo je slovo F",
      choice4: "Ovo je slovo A",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/h.PNG",
      choice1: "Ovo je slovo H",
      choice2: "Ovo je slovo D",
      choice3: "Ovo je slovo N",
      choice4: "Ovo je slovo R",
      answer: 1
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/c.jpg",
      choice1: "Ovo je slovo J",
      choice2: "Ovo je slovo Ć",
      choice3: "Ovo je slovo C",
      choice4: "Ovo je slovo E",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/č.jpg",
      choice1: "Ovo je slovo H",
      choice2: "Ovo je slovo Č",
      choice3: "Ovo je slovo C",
      choice4: "Ovo je slovo Ć",
      answer: 2
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/dž.PNG",
      choice1: "Ovo je slovo Dž",
      choice2: "Ovo je slovo Ž",
      choice3: "Ovo je slovo Đ",
      choice4: "Ovo je slovo D",
      answer: 1
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      imgsrc: "abeceda/š.PNG",
      choice1: "Ovo je slovo Z",
      choice2: "Ovo je slovo Ž",
      choice3: "Ovo je slovo S",
      choice4: "Ovo je slovo Š",
      answer: 4
    }
    
    
  ];



//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 40;
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
    return window.location.assign("endlatinica.html");
  }
  questionCounter++;
  progressText.innerText = `Pitanje ${questionCounter}/${MAX_QUESTIONS}`;
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
