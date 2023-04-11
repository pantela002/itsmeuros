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
        imgsrc: "azbuka/slova/a.png",
        choice1: "Ово је слово А",
        choice2: "Ово је слово Ч",
        choice3: "Ово је слово Ф",
        choice4: "Ово је слово И",
        answer: 1
      },
      {
        question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        imgsrc: "azbuka/slova/b.png",
        choice1: "Ово је слово Ж",
        choice2: "Ово је слово Љ",
        choice3: "Ово је слово Б",
        choice4: "Ово је слово Д",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/v.png",
        choice1: "Ово је слово Ш",
        choice2: "Ово је слово Ф",
        choice3: "Ово је слово П",
        choice4: "Ово је слово В",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/g.png",
        choice1: "Ово је слово С",
        choice2: "Ово је слово Г",
        choice3: "Ово је слово О",
        choice4: "Ово је слово Љ",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/d.png",
        choice1: "Ово је слово А",
        choice2: "Ово је слово В",
        choice3: "Ово је слово Д",
        choice4: "Ово је слово Н",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/dj.png",
        choice1: "Ово је слово К",
        choice2: "Ово је слово Л",
        choice3: "Ово је слово Д",
        choice4: "Ово је слово Ђ",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/e.png",
        choice1: "Ово је слово Ш",
        choice2: "Ово је слово Е",
        choice3: "Ово је слово Ф",
        choice4: "Ово је слово Н",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/zz.png",
        choice1: "Ово је слово У",
        choice2: "Ово је слово П",
        choice3: "Ово је слово Б",
        choice4: "Ово је слово Ж",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/z.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово Њ",
        choice3: "Ово је слово З",
        choice4: "Ово је слово Т",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/i.png",
        choice1: "Ово је слово И",
        choice2: "Ово је слово Љ",
        choice3: "Ово је слово П",
        choice4: "Ово је слово Ћ",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/j.png",
        choice1: "Ово је слово А",
        choice2: "Ово је слово Е",
        choice3: "Ово је слово Ж",
        choice4: "Ово је слово Ј",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/k.png",
        choice1: "Ово је слово Х",
        choice2: "Ово је слово К",
        choice3: "Ово је слово Ј",
        choice4: "Ово је слово Ц",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/l.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово Д",
        choice3: "Ово је слово Л",
        choice4: "Ово је слово Д",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/lj.png",
        choice1: "Ово је слово Љ",
        choice2: "Ово је слово С",
        choice3: "Ово је слово И",
        choice4: "Ово је слово Б",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/m.png",
        choice1: "Ово је слово Ш",
        choice2: "Ово је слово К",
        choice3: "Ово је слово М",
        choice4: "Ово је слово Т",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/n.png",
        choice1: "Ово је слово Ж",
        choice2: "Ово је слово Г",
        choice3: "Ово је слово К",
        choice4: "Ово је слово Н",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/nj.png",
        choice1: "Ово је слово Ј",
        choice2: "Ово је слово Е",
        choice3: "Ово је слово Њ",
        choice4: "Ово је слово Ц",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/o.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово М",
        choice3: "Ово је слово Е",
        choice4: "Ово је слово А",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/p.png",
        choice1: "Ово је слово Ф",
        choice2: "Ово је слово В",
        choice3: "Ово је слово П",
        choice4: "Ово је слово Д",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/r.png",
        choice1: "Ово је слово Р",
        choice2: "Ово је слово С",
        choice3: "Ово је слово Л",
        choice4: "Ово је слово З",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/s.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово Ж",
        choice3: "Ово је слово Ш",
        choice4: "Ово је слово С",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/t.png",
        choice1: "Ово је слово Т",
        choice2: "Ово је слово З",
        choice3: "Ово је слово И",
        choice4: "Ово је слово Ч",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/cc.png",
        choice1: "Ово је слово Л",
        choice2: "Ово је слово Ћ",
        choice3: "Ово је слово К",
        choice4: "Ово је слово Т",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/u.png",
        choice1: "Ово је слово Д",
        choice2: "Ово је слово Б",
        choice3: "Ово је слово У",
        choice4: "Ово је слово Ж",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/f.png",
        choice1: "Ово је слово Љ",
        choice2: "Ово је слово Џ",
        choice3: "Ово је слово Ф",
        choice4: "Ово је слово О",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/h.png",
        choice1: "Ово је слово Х",
        choice2: "Ово је слово А",
        choice3: "Ово је слово Ћ",
        choice4: "Ово је слово Г",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/c.png",
        choice1: "Ово је слово Д",
        choice2: "Ово је слово Ж",
        choice3: "Ово је слово Ц",
        choice4: "Ово је слово Ј",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/ccc.png",
        choice1: "Ово је слово Б",
        choice2: "Ово је слово Ч",
        choice3: "Ово је слово У",
        choice4: "Ово је слово Ј",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/dz.png",
        choice1: "Ово је слово Џ",
        choice2: "Ово је слово Н",
        choice3: "Ово је слово М",
        choice4: "Ово је слово Т",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/ss.png",
        choice1: "Ово је слово Ц",
        choice2: "Ово је слово Т",
        choice3: "Ово је слово Ђ",
        choice4: "Ово је слово Ш",
        answer: 4
      },
      {
        question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        imgsrc: "azbuka/slova/a.png",
        choice1: "Ово је слово А",
        choice2: "Ово је слово Ч",
        choice3: "Ово је слово Ф",
        choice4: "Ово је слово И",
        answer: 1
      },
      {
        question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        imgsrc: "azbuka/slova/b.png",
        choice1: "Ово је слово Ж",
        choice2: "Ово је слово Љ",
        choice3: "Ово је слово Б",
        choice4: "Ово је слово Д",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/v.png",
        choice1: "Ово је слово Ш",
        choice2: "Ово је слово Ф",
        choice3: "Ово је слово П",
        choice4: "Ово је слово В",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/g.png",
        choice1: "Ово је слово С",
        choice2: "Ово је слово Г",
        choice3: "Ово је слово О",
        choice4: "Ово је слово Љ",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/d.png",
        choice1: "Ово је слово А",
        choice2: "Ово је слово В",
        choice3: "Ово је слово Д",
        choice4: "Ово је слово Н",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/dj.png",
        choice1: "Ово је слово К",
        choice2: "Ово је слово Л",
        choice3: "Ово је слово Д",
        choice4: "Ово је слово Ђ",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/e.png",
        choice1: "Ово је слово Ш",
        choice2: "Ово је слово Е",
        choice3: "Ово је слово Ф",
        choice4: "Ово је слово Н",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/zz.png",
        choice1: "Ово је слово У",
        choice2: "Ово је слово П",
        choice3: "Ово је слово Б",
        choice4: "Ово је слово Ж",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/z.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово Њ",
        choice3: "Ово је слово З",
        choice4: "Ово је слово Т",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/i.png",
        choice1: "Ово је слово И",
        choice2: "Ово је слово Љ",
        choice3: "Ово је слово П",
        choice4: "Ово је слово Ћ",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/j.png",
        choice1: "Ово је слово А",
        choice2: "Ово је слово Е",
        choice3: "Ово је слово Ж",
        choice4: "Ово је слово Ј",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/k.png",
        choice1: "Ово је слово Х",
        choice2: "Ово је слово К",
        choice3: "Ово је слово Ј",
        choice4: "Ово је слово Ц",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/l.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово Д",
        choice3: "Ово је слово Л",
        choice4: "Ово је слово Д",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/lj.png",
        choice1: "Ово је слово Љ",
        choice2: "Ово је слово С",
        choice3: "Ово је слово И",
        choice4: "Ово је слово Б",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/m.png",
        choice1: "Ово је слово Ш",
        choice2: "Ово је слово К",
        choice3: "Ово је слово М",
        choice4: "Ово је слово Т",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/n.png",
        choice1: "Ово је слово Ж",
        choice2: "Ово је слово Г",
        choice3: "Ово је слово К",
        choice4: "Ово је слово Н",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/nj.png",
        choice1: "Ово је слово Ј",
        choice2: "Ово је слово Е",
        choice3: "Ово је слово Њ",
        choice4: "Ово је слово Ц",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/o.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово М",
        choice3: "Ово је слово Е",
        choice4: "Ово је слово А",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/p.png",
        choice1: "Ово је слово Ф",
        choice2: "Ово је слово В",
        choice3: "Ово је слово П",
        choice4: "Ово је слово Д",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/r.png",
        choice1: "Ово је слово Р",
        choice2: "Ово је слово С",
        choice3: "Ово је слово Л",
        choice4: "Ово је слово З",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/s.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово Ж",
        choice3: "Ово је слово Ш",
        choice4: "Ово је слово С",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/t.png",
        choice1: "Ово је слово Т",
        choice2: "Ово је слово З",
        choice3: "Ово је слово И",
        choice4: "Ово је слово Ч",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/cc.png",
        choice1: "Ово је слово Л",
        choice2: "Ово је слово Ћ",
        choice3: "Ово је слово К",
        choice4: "Ово је слово Т",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/u.png",
        choice1: "Ово је слово Д",
        choice2: "Ово је слово Б",
        choice3: "Ово је слово У",
        choice4: "Ово је слово Ж",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/f.png",
        choice1: "Ово је слово Љ",
        choice2: "Ово је слово Џ",
        choice3: "Ово је слово Ф",
        choice4: "Ово је слово О",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/h.png",
        choice1: "Ово је слово Х",
        choice2: "Ово је слово А",
        choice3: "Ово је слово Ћ",
        choice4: "Ово је слово Г",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/c.png",
        choice1: "Ово је слово Д",
        choice2: "Ово је слово Ж",
        choice3: "Ово је слово Ц",
        choice4: "Ово је слово Ј",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/ccc.png",
        choice1: "Ово је слово Б",
        choice2: "Ово је слово Ч",
        choice3: "Ово је слово У",
        choice4: "Ово је слово Ј",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/dz.png",
        choice1: "Ово је слово Џ",
        choice2: "Ово је слово Н",
        choice3: "Ово је слово М",
        choice4: "Ово је слово Т",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/ss.png",
        choice1: "Ово је слово Ц",
        choice2: "Ово је слово Т",
        choice3: "Ово је слово Ђ",
        choice4: "Ово је слово Ш",
        answer: 4
      },
      {
        question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        imgsrc: "azbuka/slova/a.png",
        choice1: "Ово је слово А",
        choice2: "Ово је слово Ч",
        choice3: "Ово је слово Ф",
        choice4: "Ово је слово И",
        answer: 1
      },
      {
        question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        imgsrc: "azbuka/slova/b.png",
        choice1: "Ово је слово Ж",
        choice2: "Ово је слово Љ",
        choice3: "Ово је слово Б",
        choice4: "Ово је слово Д",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/v.png",
        choice1: "Ово је слово Ш",
        choice2: "Ово је слово Ф",
        choice3: "Ово је слово П",
        choice4: "Ово је слово В",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/g.png",
        choice1: "Ово је слово С",
        choice2: "Ово је слово Г",
        choice3: "Ово је слово О",
        choice4: "Ово је слово Љ",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/d.png",
        choice1: "Ово је слово А",
        choice2: "Ово је слово В",
        choice3: "Ово је слово Д",
        choice4: "Ово је слово Н",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/dj.png",
        choice1: "Ово је слово К",
        choice2: "Ово је слово Л",
        choice3: "Ово је слово Д",
        choice4: "Ово је слово Ђ",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/e.png",
        choice1: "Ово је слово Ш",
        choice2: "Ово је слово Е",
        choice3: "Ово је слово Ф",
        choice4: "Ово је слово Н",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/zz.png",
        choice1: "Ово је слово У",
        choice2: "Ово је слово П",
        choice3: "Ово је слово Б",
        choice4: "Ово је слово Ж",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/z.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово Њ",
        choice3: "Ово је слово З",
        choice4: "Ово је слово Т",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/i.png",
        choice1: "Ово је слово И",
        choice2: "Ово је слово Љ",
        choice3: "Ово је слово П",
        choice4: "Ово је слово Ћ",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/j.png",
        choice1: "Ово је слово А",
        choice2: "Ово је слово Е",
        choice3: "Ово је слово Ж",
        choice4: "Ово је слово Ј",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/k.png",
        choice1: "Ово је слово Х",
        choice2: "Ово је слово К",
        choice3: "Ово је слово Ј",
        choice4: "Ово је слово Ц",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/l.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово Д",
        choice3: "Ово је слово Л",
        choice4: "Ово је слово Д",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/lj.png",
        choice1: "Ово је слово Љ",
        choice2: "Ово је слово С",
        choice3: "Ово је слово И",
        choice4: "Ово је слово Б",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/m.png",
        choice1: "Ово је слово Ш",
        choice2: "Ово је слово К",
        choice3: "Ово је слово М",
        choice4: "Ово је слово Т",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/n.png",
        choice1: "Ово је слово Ж",
        choice2: "Ово је слово Г",
        choice3: "Ово је слово К",
        choice4: "Ово је слово Н",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/nj.png",
        choice1: "Ово је слово Ј",
        choice2: "Ово је слово Е",
        choice3: "Ово је слово Њ",
        choice4: "Ово је слово Ц",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/o.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово М",
        choice3: "Ово је слово Е",
        choice4: "Ово је слово А",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/p.png",
        choice1: "Ово је слово Ф",
        choice2: "Ово је слово В",
        choice3: "Ово је слово П",
        choice4: "Ово је слово Д",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/r.png",
        choice1: "Ово је слово Р",
        choice2: "Ово је слово С",
        choice3: "Ово је слово Л",
        choice4: "Ово је слово З",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/s.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово Ж",
        choice3: "Ово је слово Ш",
        choice4: "Ово је слово С",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/t.png",
        choice1: "Ово је слово Т",
        choice2: "Ово је слово З",
        choice3: "Ово је слово И",
        choice4: "Ово је слово Ч",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/cc.png",
        choice1: "Ово је слово Л",
        choice2: "Ово је слово Ћ",
        choice3: "Ово је слово К",
        choice4: "Ово је слово Т",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/u.png",
        choice1: "Ово је слово Д",
        choice2: "Ово је слово Б",
        choice3: "Ово је слово У",
        choice4: "Ово је слово Ж",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/f.png",
        choice1: "Ово је слово Љ",
        choice2: "Ово је слово Џ",
        choice3: "Ово је слово Ф",
        choice4: "Ово је слово О",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/h.png",
        choice1: "Ово је слово Х",
        choice2: "Ово је слово А",
        choice3: "Ово је слово Ћ",
        choice4: "Ово је слово Г",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/c.png",
        choice1: "Ово је слово Д",
        choice2: "Ово је слово Ж",
        choice3: "Ово је слово Ц",
        choice4: "Ово је слово Ј",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/ccc.png",
        choice1: "Ово је слово Б",
        choice2: "Ово је слово Ч",
        choice3: "Ово је слово У",
        choice4: "Ово је слово Ј",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/dz.png",
        choice1: "Ово је слово Џ",
        choice2: "Ово је слово Н",
        choice3: "Ово је слово М",
        choice4: "Ово је слово Т",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/ss.png",
        choice1: "Ово је слово Ц",
        choice2: "Ово је слово Т",
        choice3: "Ово је слово Ђ",
        choice4: "Ово је слово Ш",
        answer: 4
      },
      {
        question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        imgsrc: "azbuka/slova/a.png",
        choice1: "Ово је слово А",
        choice2: "Ово је слово Ч",
        choice3: "Ово је слово Ф",
        choice4: "Ово је слово И",
        answer: 1
      },
      {
        question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        imgsrc: "azbuka/slova/b.png",
        choice1: "Ово је слово Ж",
        choice2: "Ово је слово Љ",
        choice3: "Ово је слово Б",
        choice4: "Ово је слово Д",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/v.png",
        choice1: "Ово је слово Ш",
        choice2: "Ово је слово Ф",
        choice3: "Ово је слово П",
        choice4: "Ово је слово В",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/g.png",
        choice1: "Ово је слово С",
        choice2: "Ово је слово Г",
        choice3: "Ово је слово О",
        choice4: "Ово је слово Љ",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/d.png",
        choice1: "Ово је слово А",
        choice2: "Ово је слово В",
        choice3: "Ово је слово Д",
        choice4: "Ово је слово Н",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/dj.png",
        choice1: "Ово је слово К",
        choice2: "Ово је слово Л",
        choice3: "Ово је слово Д",
        choice4: "Ово је слово Ђ",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/e.png",
        choice1: "Ово је слово Ш",
        choice2: "Ово је слово Е",
        choice3: "Ово је слово Ф",
        choice4: "Ово је слово Н",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/zz.png",
        choice1: "Ово је слово У",
        choice2: "Ово је слово П",
        choice3: "Ово је слово Б",
        choice4: "Ово је слово Ж",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/z.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово Њ",
        choice3: "Ово је слово З",
        choice4: "Ово је слово Т",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/i.png",
        choice1: "Ово је слово И",
        choice2: "Ово је слово Љ",
        choice3: "Ово је слово П",
        choice4: "Ово је слово Ћ",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/j.png",
        choice1: "Ово је слово А",
        choice2: "Ово је слово Е",
        choice3: "Ово је слово Ж",
        choice4: "Ово је слово Ј",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/k.png",
        choice1: "Ово је слово Х",
        choice2: "Ово је слово К",
        choice3: "Ово је слово Ј",
        choice4: "Ово је слово Ц",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/l.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово Д",
        choice3: "Ово је слово Л",
        choice4: "Ово је слово Д",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/lj.png",
        choice1: "Ово је слово Љ",
        choice2: "Ово је слово С",
        choice3: "Ово је слово И",
        choice4: "Ово је слово Б",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/m.png",
        choice1: "Ово је слово Ш",
        choice2: "Ово је слово К",
        choice3: "Ово је слово М",
        choice4: "Ово је слово Т",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/n.png",
        choice1: "Ово је слово Ж",
        choice2: "Ово је слово Г",
        choice3: "Ово је слово К",
        choice4: "Ово је слово Н",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/nj.png",
        choice1: "Ово је слово Ј",
        choice2: "Ово је слово Е",
        choice3: "Ово је слово Њ",
        choice4: "Ово је слово Ц",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/o.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово М",
        choice3: "Ово је слово Е",
        choice4: "Ово је слово А",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/p.png",
        choice1: "Ово је слово Ф",
        choice2: "Ово је слово В",
        choice3: "Ово је слово П",
        choice4: "Ово је слово Д",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/r.png",
        choice1: "Ово је слово Р",
        choice2: "Ово је слово С",
        choice3: "Ово је слово Л",
        choice4: "Ово је слово З",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/s.png",
        choice1: "Ово је слово О",
        choice2: "Ово је слово Ж",
        choice3: "Ово је слово Ш",
        choice4: "Ово је слово С",
        answer: 4
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/t.png",
        choice1: "Ово је слово Т",
        choice2: "Ово је слово З",
        choice3: "Ово је слово И",
        choice4: "Ово је слово Ч",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/cc.png",
        choice1: "Ово је слово Л",
        choice2: "Ово је слово Ћ",
        choice3: "Ово је слово К",
        choice4: "Ово је слово Т",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/u.png",
        choice1: "Ово је слово Д",
        choice2: "Ово је слово Б",
        choice3: "Ово је слово У",
        choice4: "Ово је слово Ж",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/f.png",
        choice1: "Ово је слово Љ",
        choice2: "Ово је слово Џ",
        choice3: "Ово је слово Ф",
        choice4: "Ово је слово О",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/h.png",
        choice1: "Ово је слово Х",
        choice2: "Ово је слово А",
        choice3: "Ово је слово Ћ",
        choice4: "Ово је слово Г",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/c.png",
        choice1: "Ово је слово Д",
        choice2: "Ово је слово Ж",
        choice3: "Ово је слово Ц",
        choice4: "Ово је слово Ј",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/ccc.png",
        choice1: "Ово је слово Б",
        choice2: "Ово је слово Ч",
        choice3: "Ово је слово У",
        choice4: "Ово је слово Ј",
        answer: 2
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/dz.png",
        choice1: "Ово је слово Џ",
        choice2: "Ово је слово Н",
        choice3: "Ово је слово М",
        choice4: "Ово је слово Т",
        answer: 1
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        imgsrc: "azbuka/slova/ss.png",
        choice1: "Ово је слово Ц",
        choice2: "Ово је слово Т",
        choice3: "Ово је слово Ђ",
        choice4: "Ово је слово Ш",
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
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Питање ${questionCounter}/${MAX_QUESTIONS}`;
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
