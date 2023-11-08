const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Madrid", "Paris"],
        correctAnswer: "Paris",
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    optionsContainer.innerHTML = "";
    current.options.forEach((option) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const current = questions[currentQuestion];
    if (selectedOption === current.correctAnswer) {
        score++;
        scoreElement.textContent = score;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz completed. Your score is ${score}/${questions.length}`);
        // You can add more logic for what to do after the quiz ends.
    }
}

document.getElementById("next-button").addEventListener("click", () => {
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed. Your score is " + score + "/" + questions.length);
        // You can add more logic for what to do after the quiz ends.
    }
});

// Load the first question when the page loads
loadQuestion();
