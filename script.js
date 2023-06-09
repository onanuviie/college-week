import { musicQuestions } from "./music.js"
import { moviesQuestions } from "./movies.js"
import { literatureQuestions } from "./literature.js"
import { bibleQuestions } from "./bibleKnowledge.js"
import { foodQuestions } from "./food.js"
import { historyQuestions } from "./history.js"
import { artQuestions } from "./arts.js"

const quizBox = document.querySelector('.quiz-box')
const quizButton = document.querySelector('.quiz-button')

const questions = []

// Accessing the form
let form = document.forms['Categories']
let menu = form.Category
let options = form.Category.options
console.dir(options)

form.onsubmit = function(e) {
    e.preventDefault()

    let optionValue = this.Category.value
    console.log(optionValue)
}

// Generate questions based on chosen category
function generateQuestion() {
    form.onsubmit = function(e) {
        e.preventDefault()
    
        let optionValue = this.Category.value
        console.log(optionValue)

        if (optionValue === "Music") {
            questions.splice(0)
            questions.push(...musicQuestions)
            console.log(questions)
        }

        if (optionValue === "Movies") {
            questions.splice(0)
            questions.push(...moviesQuestions)
            console.log(questions)
        }

        if (optionValue === "Literature") {
            questions.splice(0)
            questions.push(...literatureQuestions)
            console.log(questions)
        }

        if (optionValue === "Knowledge") {
            questions.splice(0)
            questions.push(...bibleQuestions)
            console.log(questions)
        }

        if (optionValue === "Food") {
            questions.splice(0)
            questions.push(...foodQuestions)
            console.log(questions)
        }

        if (optionValue === "History") {
            questions.splice(0)
            questions.push(...historyQuestions)
            console.log(questions)
        }

        if (optionValue === "Arts") {
            questions.splice(0)
            questions.push(...artQuestions)
            console.log(questions)
        }
    }
}


// Create the quiz card

function handleClick() {
    generateQuestion()
    let chosenQuestion = questions[Math.floor(Math.random() * questions.length)]

    const questionBlock = document.createElement('div')
    questionBlock.classList.add('question-block')
    questionBlock.classList.add('front')
    const questionHeading = document.createElement('h2')
    questionHeading.classList.add('question-heading')
    questionHeading.innerHTML = chosenQuestion.question

    questionBlock.append(questionHeading)
    quizBox.append(questionBlock)

    const answerBox = document.createElement('div')
    answerBox.classList.add('answer-box')
    answerBox.classList.add('back')
    const answerText = document.createElement('h3')
    answerText.innerHTML = chosenQuestion.answer

    answerBox.append(answerText)
    quizBox.append(answerBox)

    quizBox.addEventListener('click', flipCard)

    //Remove the Event Listener
    quizButton.addEventListener('click', () => {
        questionHeading.innerHTML = ""
        answerText.innerHTML = ""
    })
    
    quizButton.addEventListener('click', handleClick) 
}

function createCard() {
    quizButton.addEventListener('click', handleClick) 
    console.log("creating")
}

createCard()

function flipCard() {
    quizBox.classList.toggle('flip');
    quizBox.classList.toggle('!flip');
}
