
//peanuts
const quizData = {
    HTML: [
        { question: "1. Which tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<hyperlink>"], correct: 0 },
        { question: "2. What does the <title> tag define?", options: ["Main heading", "Tooltip", "Page title", "Subtitle"], correct: 2 },
        { question: "3. What is the purpose of <meta> tags?", options: ["Provide metadata", "Create links", "Define styles", "Define scripts"], correct: 0 },
        { question: "4. Which HTML attribute is used to define inline styles?", options: ["style", "class", "id", "inline"], correct: 0 },
        { question: "5. What is the correct HTML element for inserting a line break?", options: ["<br>", "<lb>", "<break>", "<ln>"], correct: 0 },
        { question: "6. How can you open a link in a new tab?", options: ["target='_blank'", "target='_new'", "open='_tab'", "open='_new'"], correct: 0 },
        { question: "7. Which HTML element is used to define a header for a document?", options: ["<header>", "<head>", "<h1>", "<section>"], correct: 0 },
        { question: "8. Which tag is used to create a numbered list?", options: ["<ol>", "<ul>", "<list>", "<nl>"], correct: 0 },
        { question: "9. What does the <hr> tag represent?", options: ["A horizontal rule", "A heading", "A hyperlink", "A header row"], correct: 0 },
        { question: "10. How do you specify an image's alternate text?", options: ["alt", "text", "description", "caption"], correct: 0 },
    ],
    Python: [
        { question: "1. What is the output of 2**3?", options: ["6", "8", "12", "9"], correct: 1 },
        { question: "2. How do you define a function?", options: ["func()", "def myFunction():", "function myFunction()", "function: myFunction()"], correct: 1 },
        { question: "3. Which of the following is immutable in Python?", options: ["List", "Tuple", "Dictionary", "Set"], correct: 1 },
        { question: "4. What is used to define a block of code in Python?", options: ["Indentation", "Curly Braces", "Parentheses", "Semicolon"], correct: 0 },
        { question: "5. How do you write a comment in Python?", options: ["# Comment", "// Comment", "/* Comment */", "<!-- Comment -->"], correct: 0 },
        { question: "6. Which of the following is a valid variable name?", options: ["1var", "_var", "var!", "var name"], correct: 1 },
        { question: "7. What is the output of len('Python')?", options: ["6", "7", "5", "Error"], correct: 0 },
        { question: "8. How do you import a module in Python?", options: ["import module_name", "include module_name", "require module_name", "using module_name"], correct: 0 },
        { question: "9. What is the result of '2' + '3' in Python?", options: ["23", "5", "Error", "None"], correct: 0 },
        { question: "10. How do you write a loop in Python?", options: ["for i in range(5):", "for i=0; i<5; i++", "foreach(i=0; i<5; i++)", "loop i from 0 to 5"], correct: 0 },
    ],
    CSS: [
        { question: "1. What property changes text color?", options: ["text-color", "font-color", "color", "style"], correct: 2 },
        { question: "2. What does the z-index property do?", options: ["Controls depth", "Changes text color", "Aligns text", "Sets padding"], correct: 0 },
        { question: "3. How do you include an external stylesheet?", options: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<stylesheet='style.css'>", "<css file='style.css'>"], correct: 0 },
        { question: "4. Which property is used to change the font of text?", options: ["font-family", "font-style", "font-weight", "font-text"], correct: 0 },
        { question: "5. How do you make text bold in CSS?", options: ["font-weight: bold;", "font: bold;", "text-weight: bold;", "style: bold;"], correct: 0 },
        { question: "6. What does the 'position' property control?", options: ["Element positioning", "Text color", "Font size", "Padding"], correct: 0 },
        { question: "7. How do you apply a class in CSS?", options: [".classname", "#classname", "classname", "*classname"], correct: 0 },
        { question: "8. How do you set padding in CSS?", options: ["padding: 10px;", "padding-size: 10px;", "margin: 10px;", "set-padding: 10px;"], correct: 0 },
        { question: "9. What is the default value of 'position' in CSS?", options: ["static", "absolute", "relative", "fixed"], correct: 0 },
        { question: "10. Which unit is relative to the parent element?", options: ["em", "rem", "px", "%"], correct: 0 },
    ],
    Cplusplus: [
        { question: "1. What does #include<iostream> do?", options: ["Imports library", "Starts a function", "Declares variable", "Defines class"], correct: 0 },
        { question: "2. Which data type is for whole numbers?", options: ["float", "int", "char", "string"], correct: 1 },
        { question: "3. What is the purpose of 'return 0'?", options: ["Indicates success", "Terminates program", "Creates variable", "Loops execution"], correct: 0 },
        { question: "4. What operator is used to access class members?", options: [".", "->", ":", "*"], correct: 0 },
        { question: "5. What does 'cin' do in C++?", options: ["Takes input", "Displays output", "Declares variable", "Defines function"], correct: 0 },
        { question: "6. How do you declare a pointer?", options: ["int *ptr;", "pointer<int> ptr;", "int ptr[];", "ptr<int>"], correct: 0 },
        { question: "7. What is the purpose of the 'new' keyword?", options: ["Allocate memory", "Deallocate memory", "Return value", "Break loop"], correct: 0 },
        { question: "8. How do you create an object of a class?", options: ["ClassName obj;", "create obj;", "new ClassName;", "def obj;"], correct: 0 },
        { question: "9. What does 'virtual' keyword indicate?", options: ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"], correct: 0 },
        { question: "10. What is a constructor in C++?", options: ["Special class function", "Memory allocator", "Variable", "None"], correct: 0 },
    ]
};


let currentLanguage = "HTML";
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questions = quizData[currentLanguage];
  const questionData = questions[currentQuestionIndex];
  document.getElementById("language-title").innerText = `Language: ${currentLanguage}`;
  document.getElementById("question").innerText = questionData.question;
  const optionButtons = document.querySelectorAll(".option");
  optionButtons.forEach((button, index) => {
    button.innerText = questionData.options[index];
    button.className = "option"; // Reset button styles
    button.disabled = false; // Enable buttons
  });
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(button, index) {
  const questions = quizData[currentLanguage];
  const questionData = questions[currentQuestionIndex];
  const optionButtons = document.querySelectorAll(".option");

  if (index === questionData.correct) {
    button.classList.add("correct");
    score++; // Increment score for correct answer
  } else {
    button.classList.add("wrong");
    optionButtons[questionData.correct].classList.add("correct");
  }

  optionButtons.forEach((btn) => (btn.disabled = true)); // Disable all buttons
  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  const questions = quizData[currentLanguage];
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    const languages = Object.keys(quizData);
    const currentLanguageIndex = languages.indexOf(currentLanguage);
    if (currentLanguageIndex < languages.length - 1) {
      currentLanguage = languages[currentLanguageIndex + 1];
      currentQuestionIndex = 0;
      loadQuestion();
    } else {
      showFinalScore();
    }
  }
}

function showFinalScore() {
  document.querySelector(".quiz-container").innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your final score is: ${score}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
  `;
}

function restartQuiz() {
  currentLanguage = "HTML";
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
}

// Initial load
loadQuestion();