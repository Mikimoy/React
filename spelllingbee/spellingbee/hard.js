//inisiasi soal dalam quiz
const questions = [
    {
        question : "https://ssl.gstatic.com/dictionary/static/sounds/oxford/apple--_gb_1.mp3",
        optionA: "Languega",
        optionB: "Langeung",
        optionC: "Language",
        optionD: "Languuage",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/apple--_gb_1.mp3",
        optionA: "Inprovement",
        optionB: "Improvement",
        optionC: "Improvemen",
        optionD: "Improvements",
        correctOption: "optionB"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/apple--_gb_1.mp3",
        optionA: "Government",
        optionB: "Goveremens",
        optionC: "Governments",
        optionD: "Goverremen",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/apple--_gb_1.mp3",
        optionA: "Accoomodate",
        optionB: "Accomodat",
        optionC: "Accommodate",
        optionD: "Accomodatee",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/book--_gb_1.mp3",
        optionA: "Encyclopeedia",
        optionB: "Enciclopediia",
        optionC: "Encycclopedia",
        optionD: "Encyclopedia",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/assignment--_gb_1.mp3",
        optionA: "Asignments",
        optionB: "Assigment",
        optionC: "Assignment",
        optionD: "Assignments",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/domesticate--_gb_1.mp3",
        optionA: "Dommesticate'",
        optionB: "Domeesticate",
        optionC: "Domesticate",
        optionD: "Domeestycate",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/unfriendly--_gb_1.mp3",
        optionA: "Unfriendly",
        optionB: "Unfryendly",
        optionC: "Unfrendly",
        optionD: "Unfriendli",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/management--_gb_1.mp3",
        optionA: "Manageements",
        optionB: "Management",
        optionC: "Managemmens",
        optionD: "Maanagements",
        correctOption: "optionB"
    },

    {
        question:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/inspection--_gb_1.mp3",
        optionA: "Inspeektion",
        optionB: "Inspectioon",
        optionC: "Inspection",
        optionD: "Iinspection",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/authority--_gb_1.mp3",
        optionA: "Authoriti",
        optionB: "Autohority",
        optionC: "Autohoriti",
        optionD: "Authority",
        correctOption: "optionD"
    },

  
    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/appreciate--_gb_1.mp3",
        optionA: "Appreciatee",
        optionB: "Appreciate",
        optionC: "Apprrecyate",
        optionD: "Apreciate",
        correctOption: "optionB"
    },


    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/humility--_gb_1.mp3",
        optionA: "Humality",
        optionB: "Humilyti",
        optionC: "Humilyty",
        optionD: "Humility",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/itinerant--_gb_1.mp3",
        optionA: "Itinerant",
        optionB: "Itineratn",
        optionC: "Itynerant",
        optionD: "Itanerint",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/intelligent--_gb_1.mp3",
        optionA: "Intelligent",
        optionB: "Integentlli",
        optionC: "Inteligent",
        optionD: "Itnelligents",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/dictionary--_gb_1.mp3",
        optionA: "Dictyonary",
        optionB: "Ditcionary",
        optionC: "Dictionary",
        optionD: "Dyctoinari",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/category--_gb_1.mp3",
        optionA: "Cagoteri",
        optionB: "Categori",
        optionC: "Calabar",
        optionD: "Category",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/mystery--_gb_1.mp3",
        optionA: "Msytrey",
        optionB: "Msytery",
        optionC: "Misteri",
        optionD: "Mysteri",
        correctOption: "optionB"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/ignorant--_gb_1.mp3",
        optionA: "Ignorant",
        optionB: "Ignotarn",
        optionC: "Ignornat",
        optionD: "Ignaront",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/sympathy--_gb_1.mp3",
        optionA: "Simpathy",
        optionB: "Sypamthy",
        optionC: "Sympathy",
        optionD: "Symtpahy",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/justice--_gb_1.mp3",
        optionA: "Justis",
        optionB: "Justice",
        optionC: "Justyce",
        optionC: "Justic",
        optionD: "Justs",
        correctOption: "optionB"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/psychology--_gb_1.mp3",
        optionA: "Psychology",
        optionB: "Psychologi",
        optionC: "Psichology",
        optionD: "Psichologi",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/incredible--_gb_1.mp3",
        optionA: "Incredible",
        optionB: "Incrediblle",
        optionC: "Incredyble",
        optionD: "Incrediblee",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/absolutely--_gb_1.mp3",
        optionA: "Absolutly",
        optionB: "Absolutelly",
        optionC: "Absolutely",
        optionD: "Absoluteli",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/book--_gb_1.mp3",
        optionA: "Optymistyc",
        optionB: "Optymistic",
        optionC: "Optimistyc",
        optionD: "Optimistic",
        correctOption: "optionD"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 19) {
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

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
   // document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}

function playAudio(){
    const currentQuestion = shuffledQuestions[indexNumber]
    document.getElementById("audio").src=currentQuestion.question;
    document.getElementById("audio").play();
    }

function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
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
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
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

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
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

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}