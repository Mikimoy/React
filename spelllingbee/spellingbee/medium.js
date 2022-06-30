//inisiasi soal dalam quiz
const questions = [
    {
        question : "https://ssl.gstatic.com/dictionary/static/sounds/oxford/beautiful--_gb_1.mp3",
        optionA: "Biatiful",
        optionB: "Beatifully",
        optionC: "Beautiful",
        optionD: "Baetiful",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/illustration--_gb_1.mp3",
        optionA: "illusteasion",
        optionB: "Illustration",
        optionC: "Ilutrastion",
        optionD: "Ilustrations",
        correctOption: "optionB"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/warning--_gb_1.mp3",
        optionA: "Warning",
        optionB: "Worning",
        optionC: "Warming",
        optionD: "Woring",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/believe--_gb_1.mp3",
        optionA: "Believe",
        optionB: "Beliefe",
        optionC: "Belife",
        optionD: "Belip",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/patient--_gb_1.mp3",
        optionA: "Patien",
        optionB: "Patsient",
        optionC: "Pattient",
        optionD: "Patient",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/healthy--_gb_1.mp3",
        optionA: "Healthi",
        optionB: "Healthy",
        optionC: "Helthy",
        optionD: "Healti",
        correctOption: "optionB"
    },


    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/perfume--_gb_1.mp3",
        optionA: "parpum",
        optionB: "Parvume",
        optionC: "Parfum",
        optionD: "Perfume",
        correctOption: "optionD"
    },

    {
        question:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/girl--_gb_1.mp3",
        optionA: "Gerl",
        optionB: "Girle",
        optionC: "Girl",
        optionD: "Girle",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/cupboard--_gb_1.mp3",
        optionA: "Capboard",
        optionB: "Cupboard",
        optionC: "Cuphboard",
        optionD: "Caphboard",
        correctOption: "optionB"
    },

  
    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/bathub--_gb_1.mp3",
        optionA: "Bathud",
        optionB: "Battub",
        optionC: "Bathub",
        optionD: "Batuhb",
        correctOption: "optionC"
    },


    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/kitchen--_gb_1.mp3",
        optionA: "kitce",
        optionB: "Kicthen",
        optionC: "Kitcen",
        optionD: "Kitchen",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/lighting--_gb_1.mp3",
        optionA: "Lighting",
        optionB: "Ligting",
        optionC: "Lighting",
        optionD: "Lighing",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/lamp--_gb_1.mp3",
        optionA: "Lamp",
        optionB: "lamph",
        optionC: "Lam",
        optionD: "Lamhp",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/ideal--_gb_1.mp3",
        optionA: "Ideal",
        optionB: "edeal",
        optionC: "Idael",
        optionD: "edael",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/bedroom--_gb_1.mp3",
        optionA: "Bethroom",
        optionB: "Bathroom",
        optionC: "Bedhroom",
        optionD: "Bedroom",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/holiday--_gb_1.mp3",
        optionA: "Holidday",
        optionB: "Holiday",
        optionC: "Holday",
        optionD: "Holidai",
        correctOption: "optionB"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/weekend--_gb_1.mp3",
        optionA: "Weekend",
        optionB: "Wikend",
        optionC: "Weaken",
        optionD: "Wiken",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/swimming--_gb_1.mp3",
        optionA: "Swiming",
        optionB: "Sweaming",
        optionC: "Swimming",
        optionD: "Swiiming",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/watch--_gb_1.mp3",
        optionA: "Wocth",
        optionB: "Watch",
        optionC: "Wath",
        optionC: "Wothc",
        correctOption: "optionB"
    },


    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/between--_gb_1.mp3",
        optionA: "Between",
        optionB: "Bethween",
        optionC: "Bethwen",
        optionD: "betwen",
        correctOption: "optionA"
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