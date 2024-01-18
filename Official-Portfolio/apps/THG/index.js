 const questions = [
    {
        question: "Why were the Puritan reformers opposed to King Charles I's religious policies?",
        optionA: "I don't know myself",
        optionB: "They don't know",
        optionC: "They agree with arminian leanings",
        optionD: "They disagreed with his Arminian leanings and foreign Protestant policy.",
        correctOption: "optionD"
    },

    {
        question: "What was the role of William Laud in King Charles I's reign?",
        optionA: "Laud was mainly a military advisor to Charles I.",
        optionB: "Laud led reforms to enforce religious uniformity in England.",
        optionC: "He worked to diminish the power of the Church of England.",
        optionD: "bloops ?",
        correctOption: "optionB"
    },

    {
        question: "Describe the punishments for Prynne, Burton, and Bastwick.",
        optionA: "Burp.",
        optionB: "They were knighted for their publications.",
        optionC: "They were exiled to France.",
        optionD: "They were pilloried, whipped, mutilated, and imprisoned.",
        correctOption: "optionD"
    },

    {
        question: "Why did Charles I face difficulties imposing his religious policies in Scotland?",
        optionA: "The Scots were overwhelmingly in favor of his policies.",
        optionB: "Scotland had already adopted identical religious practices.",
        optionC: "His policies, were seen as imposing Anglicanism in Scotland.",
        optionD: "Charles was highly popular in Scotland and faced no resistance.",
        correctOption: "optionC"
    },

    {
        question: "What was the Elizabethan Religious Settlement?",
        optionA: "An alliance with the Protestant German states.",
        optionB: "I don't know ! Let me sleep...",
        optionC: "An agreement with the Pope to restore Catholic practices.",
        optionD: "A policy balancing Catholic and Protestant beliefs.",
        correctOption: "optionD"
    },

    {
        question: "What was the significance of the Supremacy Act (1559)?",
        optionA: "It made Elizabeth the Supreme Governor of the Church of England.",
        optionB: "It declared Elizabeth a Catholic monarch.",
        optionC: "It abolished the Church of England.",
        optionD: "It merged the English and Scottish churches.",
        correctOption: "optionA"
    },

    {
        question: "What were the Acts of Uniformity?",
        optionA: "Laws that unified England and Scotland.",
        optionB: "Acts that established uniform tax laws.",
        optionC: "They enforced religious conformity and the use of the Book of Common Prayer.",
        optionD: "Regulations for uniform military service.",
        correctOption: "optionC"
    },

    {
        question: "What is the King James Version of the Bible?",
        optionA: "An English Bible translation authorized by James.",
        optionB: "A collection of James's speeches and writings.",
        optionC: "A new set of laws introduced by James.",
        optionD: "Meh.",
        correctOption: "optionA"
    },

    {
        question: "What was the Gunpowder Plot of 1605?",
        optionA: "James's plan to invade Ireland.",
        optionB: "A conspiracy to establish Catholicism as the state religion.",
        optionC: "A plot to overthrow the Scottish government.",
        optionD: "An attempt to assassinate James and blow up Parliament.",
        correctOption: "optionD"
    },

    {
        question: "What was Charles I's approach to religious policy?",
        optionA: "Enforced Anglicanism and opposed religious dissent.",
        optionB: "Promoted complete religious freedom.",
        optionC: "Reinstated Catholicism as the state religion.",
        optionD: "Took a hands-off approach to religious matters.",
        correctOption: "optionA"
    },

    {
        question: "What was John Bridges' main argument in his 1587 work?",
        optionA: "42",
        optionB: "Advocated for the complete disbandment of the Church of England.",
        optionC: "Defended the hierarchical structure of the Church of England.",
        optionD: "Proposed a merger between the English and Scottish churches.",
        correctOption: "optionC"
    },

    {
        question: "Why was Robert Waldegrave's press seized in 1589?",
        optionA: "For printing the Marprelate tracts, critical of the Church of England.",
        optionB: "For printing counterfeit currency.",
        optionC: "For publishing literature against the monarchy.",
        optionD: "For unauthorized printing of the King James Bible.",
        correctOption: "optionA"
    },


    {
        question: "What was the significance of the defeat of the Spanish Armada in 1588?",
        optionA: "Led to the immediate end of the war between England and Spain.",
        optionB: "Marked England's rise as a naval power and Spain's decline.",
        optionC: "Resulted in Spain taking control of English territories.",
        optionD: "Caused the collapse of Queen Elizabeth's government.",
        correctOption: "optionB"
    },

    {
        question: "What was the reaction to John Udall's book The State of the Church of England Laid Open?",
        optionA: "It led to Udall's appointment as Archbishop of Canterbury.",
        optionB: "It was ignored and had no significant impact.",
        optionC: "It was widely accepted and promoted by the Church.",
        optionD: "The book was burned, and Waldegrave's press was destroyed.",
        correctOption: "optionD"
    },

    {
        question: "What was the impact of the deaths of Robert Dudley and John Field in 1588?",
        optionA: "Significant for the Puritan movement and Marprelate tracts.",
        optionB: "Caused a temporary halt to all religious publications.",
        optionC: "Led to the immediate resolution of the Puritan conflicts.",
        optionD: "Caused a temporary halt to all religious publications.",
        correctOption: "optionA"
    },

    {
        question: "Why were Martin's Epistle and Udall's Demonstration printed at East Molesey Priory in October 1588?",
        optionA: "I don't give a freak about that one.",
        optionB: "As a public event to promote the tracts.",
        optionC: "To avoid detection by authorities.",
        optionD: "For a special ceremony at the manor.",
        correctOption: "optionC"
    },

    {
        question: "What was printed at Sir Richard Knightley's manor in November 1588?",
        optionA: "Martin's Epitome, part of the Marprelate tracts.",
        optionB: "A new version of the Bible.",
        optionC: "Official government documents.",
        optionD: "A collection of Shakespeare's early plays.",
        correctOption: "optionA"
    },

    {
        question: "What was significant about the January 1589 printing at the Whitefriars in Coventry?",
        optionA: "The peace treaty with Spain was published.",
        optionB: "The first English dictionary was printed.",
        optionC: "Martin's Certain Mineral and Metaphysical School-points was printed.",
        optionD: "It was the last printing of the Marprelate tracts.",
        correctOption: "optionC"
    },

    {
        question: "What did Thomas Cooper's Admonition to the People of England warn against?",
        optionA: "The rise of the Puritan movement.",
        optionB: "The invasion of the Spanish Armada.",
        optionC: "The spread of the Black Death.",
        optionD: "The dangers of the Martin Marprelate tracts.",
        correctOption: "optionD"
    },

    ////
    {
        question: "Its main purpose was to create a secular state separate from religious influences.",
        optionA: "The rise of the Puritan movement.",
        optionB: "The Act focused on establishing England as a primarily Puritan state.",
        optionC: "It was designed to completely eradicate Catholic practices in England.",
        optionD: "The Act aimed to establish the practices and doctrines of the Church of England, defining the religious identity of the English state.",
        correctOption: "optionD"
    },

    {
        question: "What did Thomas Cooper's Admonition to the People of England warn against?",
        optionA: "The rise of the Puritan movement.",
        optionB: "The invasion of the Spanish Armada.",
        optionC: "The spread of the Black Death.",
        optionD: "The dangers of the Martin Marprelate tracts.",
        correctOption: "optionD"
    },

    {
        question: "What did Thomas Cooper's Admonition to the People of England warn against?",
        optionA: "The rise of the Puritan movement.",
        optionB: "The invasion of the Spanish Armada.",
        optionC: "The spread of the Black Death.",
        optionD: "The dangers of the Martin Marprelate tracts.",
        correctOption: "optionD"
    },

    {
        question: "What did Thomas Cooper's Admonition to the People of England warn against?",
        optionA: "The rise of the Puritan movement.",
        optionB: "The invasion of the Spanish Armada.",
        optionC: "The spread of the Black Death.",
        optionD: "The dangers of the Martin Marprelate tracts.",
        correctOption: "optionD"
    },

    {
        question: "What did Thomas Cooper's Admonition to the People of England warn against?",
        optionA: "The rise of the Puritan movement.",
        optionB: "The invasion of the Spanish Armada.",
        optionC: "The spread of the Black Death.",
        optionD: "The dangers of the Martin Marprelate tracts.",
        correctOption: "optionD"
    },
]


let shuffledQuestions = [];

function handleQuestions() { 

    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {

            correctOption = option.labels[0].id
        }
    })


    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }


    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++

            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
