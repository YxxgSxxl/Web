// Questions INIT
const questions = [
    {
        question: "Question 1 Here",
        answers: [
            {text: "Option1", correct: false},
            {text: "Option2", correct: false},
            {text: "Option3", correct: true},
            {text: "Option4", correct: false}
        ]
    },
    {
        question: "Question 2 Here",
        answers: [
            {text: "Option1", correct: false},
            {text: "Option2", correct: false},
            {text: "Option3", correct: false},
            {text: "Option4", correct: true}
        ]
    },
    {
        question: "Question 3 Here",
        answers: [
            {text: "Option1", correct: true},
            {text: "Option2", correct: false},
            {text: "Option3", correct: false},
            {text: "Option4", correct: false}
        ]
    },
    {
        question: "Question 4 Here",
        answers: [
            {text: "Option1", correct: false},
            {text: "Option2", correct: true},
            {text: "Option3", correct: false},
            {text: "Option4", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

