// Sample questions. DONT touch this data
const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];


const QuesElement = document.getElementById('question');
const AnswerList = document.getElementById('answer-list');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');

let Score = 0;
let QuesItem = 0;

function loadQuestion() {
    // Load the first question and load subsequent question from this function
    //take an empty Question by it's index
    const Question = questions[QuesItem];
    //append the empty index to the question//
    QuesElement.append(Question.text);

    AnswerList.innerHTML = "";

    Question.options.forEach((option, index) => {
        let ListElements = document.createElement("li");
        ListElements.innerHTML = `<input type="radio" name="answer" value="${index} "> ${option}</input>`;
        //console.log(ListElements.innerHTML);
        AnswerList.appendChild(ListElements);
    });

    submitButton.hidden = false;
    nextButton.hidden = true;


}

submitButton.addEventListener("click", () => {
    // Implement the logic when the user clicks on submit button. The answer selected by the user should be validated here with the correct option

    const selectedAnswer = document.querySelector(`input[name="answer"]:checked`);

    //validation checks for the wrong answer or not checked//
    if (!selectedAnswer) {
        alert('please select any answer option');
    }

    //highlights for the wrong option selected//
    if (parseInt(selectedAnswer.value) !== questions[QuesItem].correct) {
        // Get the selected answer's index
        const selectedAnswerIndex = parseInt(selectedAnswer.value);
        AnswerList.children[selectedAnswerIndex].style.backgroundColor = "#FF7F7F"; // light red color
    }


    //if the user clicks the correct option , then increment the score by one//
    if (parseInt(selectedAnswer.value) === questions[QuesItem].correct) {
        Score++;
    }

    //validate the correct answer through giving color indication//
    const crctAnswerItem = questions[QuesItem].correct;
    AnswerList.children[crctAnswerItem].style.backgroundColor = "lightgreen";

    submitButton.hidden = true;
    nextButton.hidden = false;

});

nextButton.addEventListener("click", () => {
    // Implement the logic for showing the next question in the questions array. 
    //Basic DOM manipulation methods are required here.

    //clear the previous question which rerenders here//
    QuesElement.innerHTML = "";
    //increment the question array by one//
    QuesItem++;

    if (QuesItem < questions.length) {

        loadQuestion();
    } else {
        alert(`Congrats, You made It! ,Your score is :${Score}/${questions.length}`);

        // Also check for quiz completion here as well//
        //reset the quiz again,when it finishes//
        Score = 0;
        QuesItem = 0;
        loadQuestion();
    }
});

// Load the first question on startup
loadQuestion();