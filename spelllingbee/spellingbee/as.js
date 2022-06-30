//inisiasi soal dalam quiz
const questions = [
    {
        question : "https://ssl.gstatic.com/dictionary/static/sounds/oxford/ring--_gb_1.mp3",
        optionA: "car",
        optionB: "gadget",
        optionC: "laptop",
        optionD: "ring",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/bag--_gb_1.mp3",
        optionA: "slow",
        optionB: "bag",
        optionC: "9 players",
        optionD: "12 players",
        correctOption: "optionB"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/rush--_gb_1.mp3",
        optionA: "now",
        optionB: "Barack Obama",
        optionC: "Abraham Lincoln",
        optionD: "rush",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/low--_gb_1.mp3",
        optionA: "shoot",
        optionB: "December",
        optionC: "low",
        optionD: "August",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/high--_gb_1.mp3",
        optionA: "30 hours",
        optionB: "nugget",
        optionC: "48 hours",
        optionD: "high",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/trust--_gb_1.mp3",
        optionA: "trust",
        optionB: "Long River",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/max--_gb_1.mp3",
        optionA: "Oceania",
        optionB: "Antarctica",
        optionC: "max",
        optionD: "North America",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/now--_gb_1.mp3",
        optionA: "now",
        optionB: "Canada",
        optionC: "Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/apple--_gb_1.mp3",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "Eight",
        optionD: "apple",
        correctOption: "optionD"
    },

    {
        question:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/sugar--_gb_1.mp3",
        optionA: "Eminem",
        optionB: "Bill Gates",
        optionC: "Chris Brown",
        optionD: "sugar",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/pineapple--_gb_1.mp3",
        optionA: "Africa",
        optionB: "California",
        optionC: "pine",
        optionD: "Italy",
        correctOption: "optionC"
    },

  
    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/door--_gb_1.mp3",
        optionA: "door",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },


    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/book--_gb_1.mp3",
        optionA: "38",
        optionB: "book",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/university--_gb_1.mp3",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "university",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/laptop--_gb_1.mp3",
        optionA: "laptop",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/dark--_gb_1.mp3",
        optionA: "24",
        optionB: "30",
        optionC: "dark",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/blue--_gb_1.mp3",
        optionA: "blue",
        optionB: "Lagos",
        optionC: "Calabar",
        optionD: "Kano",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/yellow--_gb_1.mp3",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "yellow",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/ball--_gb_1.mp3",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "ball",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/club--_gb_1.mp3",
        optionA: "club",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/walk--_gb_1.mp3",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "walk",
        correctOption: "optionD"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/owl--_gb_1.mp3",
        optionA: "Jupitar",
        optionB: "owl",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/house--_gb_1.mp3",
        optionA: "Toes",
        optionB: "house",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/apple--_gb_1.mp3",
        optionA: "One",
        optionB: "Two",
        optionC: "apple",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/smart--_gb_1.mp3",
        optionA: "28",
        optionB: "30",
        optionC: "smart",
        optionD: "36",
        correctOption: "optionC"
    },

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
        if (indexNumber <= 19) {
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
    const playerGrade = (playerScore / 20) * 100

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

