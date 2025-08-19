// Array de preguntas, incluyendo los nuevos tipos "connect" y "open" (completar)
const questions = [
    {
        type: 'multiple-choice',
        question: "¿Qué trabajo es el más parecido al de un MLM?",
        options: ["Un cocinero.", "Un detective de palabras.", "Un deportista.", "Un pintor."],
        answer: "Un detective de palabras."
    },
    {
        type: 'multiple-choice',
        question: "En la oración: 'Mi gato persigue a los _ en el jardín', ¿cuál de estas palabras es la más probable que adivine un MLM?",
        options: ["peces", "ratones", "teléfonos", "estrellas"],
        answer: "ratones"
    },
    {
        type: 'multiple-choice',
        question: "¿Qué hace que un MLM sea 'inteligente' para adivinar palabras?",
        options: ["Que tiene una memoria fotográfica.", "Que lee millones de textos de internet.", "Que se comunica con otros modelos.", "Que un humano le dice la respuesta."],
        answer: "Que lee millones de textos de internet."
    },
    {
        type: 'multiple-choice',
        question: "En la frase 'Vamos al cine para ver la nueva _', ¿qué palabra es más probable que adivine un MLM?",
        options: ["casa", "película", "cama", "escuela"],
        answer: "película"
    },
    {
        type: 'yes-no',
        question: "¿Crees que un MLM podría adivinar la palabra 'bicicleta' si la oración dice: 'Mi primo me enseñó a montar en _'?",
        options: ["Sí", "No"],
        answer: "Sí"
    },
    {
        type: 'yes-no',
        question: "¿Crees que un MLM es capaz de 'entender' lo que lee, como si fuera una persona?",
        options: ["Sí", "No"],
        answer: "No"
    },
    {
        type: 'open',
        question: "Completa la frase: 'El _ es un deporte que se juega con una pelota y un bate.'"
    },
    {
        type: 'open',
        question: "Completa la frase: 'El _ es el planeta más grande de nuestro sistema solar.'"
    },
    {
        type: 'open',
        question: "Completa la frase: 'Mi comida favorita es el _ y mi bebida favorita es la _.'"
    },
    {
        type: 'multiple-choice',
        question: "¿Qué tipo de texto es el que un MLM no necesita para aprender?",
        options: ["Recetas de cocina.", "Diarios personales.", "El sonido de la lluvia.", "Artículos de noticias."],
        answer: "El sonido de la lluvia."
    },
    {
        type: 'multiple-choice',
        question: "¿Cuál de estas oraciones podría ser más difícil para un MLM si no ha visto ejemplos similares?",
        options: ["El perro juega en el parque.", "El teléfono tiene una pantalla.", "El extraterrestre pintó el sol de azul.", "Me gusta leer libros."],
        answer: "El extraterrestre pintó el sol de azul."
    },
    {
        type: 'yes-no',
        question: "¿Los modelos de lenguaje enmascarado pueden entender el significado de una oración solo por las palabras que faltan?",
        options: ["Sí", "No"],
        answer: "No"
    },
    {
        type: 'multiple-choice',
        question: "Un MLM es como un juego de 'adivina la palabra' porque...",
        options: ["Es muy divertido.", "Se basa en adivinar una palabra que está oculta.", "Necesitas un tablero y fichas.", "Se juega con un grupo de amigos."],
        answer: "Se basa en adivinar una palabra que está oculta."
    },
    {
        type: 'multiple-choice',
        question: "Si la oración es: 'El avión aterrizó en la _', ¿qué palabra es más probable que adivine el MLM?",
        options: ["nube", "carretera", "pista", "estación"],
        answer: "pista"
    },
    {
        type: 'connect',
        question: "Conecta la palabra de la izquierda con la que más se relaciona en la derecha.",
        pairs: {
            "Teclado": "Computadora",
            "Libro": "Biblioteca",
            "Perro": "Mascota"
        }
    },
    {
        type: 'connect',
        question: "Conecta la pregunta de la izquierda con la respuesta de la derecha.",
        pairs: {
            "¿Cuál es la capital de Francia?": "París",
            "¿Quién escribió 'El principito'?": "Antoine de Saint-Exupéry",
            "¿Cuántos lados tiene un triángulo?": "Tres"
        }
    },
    {
        type: 'connect',
        question: "Conecta cada animal con su hábitat natural.",
        pairs: {
            "Pez": "Océano",
            "León": "Sabana",
            "Oso polar": "Ártico"
        }
    },
    {
        type: 'connect',
        question: "Conecta la persona con su profesión.",
        pairs: {
            "Científico": "Laboratorio",
            "Médico": "Hospital",
            "Profesor": "Escuela"
        }
    },
    {
        type: 'connect',
        question: "Conecta cada planeta con su característica.",
        pairs: {
            "Marte": "Planeta rojo",
            "Júpiter": "Más grande",
            "Tierra": "Nuestro hogar"
        }
    },
    {
        type: 'multiple-choice',
        question: "¿Qué significa 'enmascarado' en el nombre 'modelo de lenguaje enmascarado'?",
        options: ["Que usa una máscara de Halloween.", "Que esconde o 'enmascara' una o más palabras.", "Que solo funciona de noche.", "Que el modelo está enfermo."],
        answer: "Que esconde o 'enmascara' una o más palabras."
    },
    {
        type: 'yes-no',
        question: "Si el MLM ve 'El rey usó su _ de oro', ¿podría adivinar la palabra 'corona'?" ,
        options: ["Sí", "No"],
        answer: "Sí"
    }
];

// Elementos del DOM
const startButton = document.getElementById('start-button');
const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');
const gameContainer = document.getElementById('game-container');
const gameTitle = document.getElementById('game-title');
const gameMessage = document.getElementById('game-message');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const openAnswerInput = document.getElementById('open-answer');
const feedbackText = document.getElementById('feedback-text');

// Barras de vida
const playerHealthBar = document.getElementById('player-health-bar');
const enemyHealthBar = document.getElementById('enemy-health-bar');
const playerFigure = document.querySelector('.player-figure');
const enemyFigure = document.querySelector('.enemy-figure');

// Preguntas de conectar
const connectContainer = document.getElementById('connect-container');
const leftList = document.getElementById('left-list');
const rightList = document.getElementById('right-list');

// Variables de estado del juego
let currentQuestionIndex = 0;
let playerHealth = 5;
let enemyHealth = 5;
let hasAnswered = false;

// Variables para preguntas de conectar
let selectedConnectItem = null;
let matchedPairs = 0;
let totalPairs = 0;

// Event Listeners
startButton.addEventListener('click', startGame);
submitButton.addEventListener('click', handleSubmit);
nextButton.addEventListener('click', nextQuestion);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    startButton.style.display = 'none';
    gameTitle.style.display = 'none';
    gameMessage.style.display = 'none';
    questionContainer.style.display = 'flex';

    playerHealth = 5;
    enemyHealth = 5;
    updateHealthBars();
    
    currentQuestionIndex = 0;
    shuffleArray(questions);
    loadQuestion();
}

function updateHealthBars() {
    playerHealthBar.style.width = `${(playerHealth / 5) * 100}%`;
    enemyHealthBar.style.width = `${(enemyHealth / 5) * 100}%`;
}

function loadQuestion() {
    if (playerHealth <= 0 || enemyHealth <= 0) {
        endGame();
        return;
    }

    hasAnswered = false;
    feedbackText.textContent = '';
    optionsList.innerHTML = '';
    openAnswerInput.style.display = 'none';
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';
    connectContainer.style.display = 'none';
    
    if (currentQuestionIndex >= questions.length) {
        endGame();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    if (currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'yes-no') {
        shuffleArray(currentQuestion.options);
        currentQuestion.options.forEach(option => {
            const li = document.createElement('li');
            li.textContent = option;
            li.addEventListener('click', (event) => handleChoice(event, option, currentQuestion.answer));
            optionsList.appendChild(li);
        });
        optionsList.style.display = 'block';
    } else if (currentQuestion.type === 'open') {
        optionsList.style.display = 'none';
        openAnswerInput.value = '';
        openAnswerInput.style.display = 'block';
        submitButton.style.display = 'block';
    } else if (currentQuestion.type === 'connect') {
        optionsList.style.display = 'none';
        connectContainer.style.display = 'flex';
        leftList.innerHTML = '';
        rightList.innerHTML = '';
        
        selectedConnectItem = null;
        matchedPairs = 0;
        totalPairs = Object.keys(currentQuestion.pairs).length;
        
        const leftItems = Object.keys(currentQuestion.pairs);
        const rightItems = Object.values(currentQuestion.pairs);
        shuffleArray(leftItems);
        shuffleArray(rightItems);

        leftItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.dataset.item = item;
            li.addEventListener('click', () => handleConnect(li, 'left'));
            leftList.appendChild(li);
        });
        
        rightItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.dataset.item = item;
            li.addEventListener('click', () => handleConnect(li, 'right'));
            rightList.appendChild(li);
        });
    }
}

function handleConnect(element, listSide) {
    if (hasAnswered) return;

    if (selectedConnectItem === null) {
        // First selection
        selectedConnectItem = { element, listSide };
        element.classList.add('selected');
    } else {
        // Second selection
        const firstElement = selectedConnectItem.element;
        const firstSide = selectedConnectItem.listSide;

        if (firstSide === listSide) {
            // Same side, reset selection
            firstElement.classList.remove('selected');
            selectedConnectItem = { element, listSide };
            element.classList.add('selected');
        } else {
            // Different sides, check for match
            const currentQuestion = questions[currentQuestionIndex];
            const firstItemText = firstElement.textContent;
            const secondItemText = element.textContent;
            
            let isCorrectMatch = false;
            if (firstSide === 'left') {
                isCorrectMatch = currentQuestion.pairs[firstItemText] === secondItemText;
            } else {
                isCorrectMatch = currentQuestion.pairs[secondItemText] === firstItemText;
            }

            if (isCorrectMatch) {
                // Correct match
                firstElement.classList.add('matched');
                element.classList.add('matched');
                firstElement.classList.remove('selected');
                element.classList.remove('selected');
                selectedConnectItem = null;
                matchedPairs++;
                
                if (matchedPairs === totalPairs) {
                    // All pairs matched
                    hasAnswered = true;
                    feedbackText.textContent = '¡Todos los pares correctos! Le has dado un golpe al oponente. 💪';
                    feedbackText.className = 'correct';
                    enemyHealth--;
                    updateHealthBars();
                    nextButton.style.display = 'block';
                }
            } else {
                // Incorrect match
                hasAnswered = true;
                feedbackText.textContent = '¡Pareja incorrecta! Te ha golpeado. 🤕';
                feedbackText.className = 'incorrect';
                playerHealth--;
                updateHealthBars();
                
                firstElement.classList.add('incorrect-match');
                element.classList.add('incorrect-match');
                
                setTimeout(() => {
                    firstElement.classList.remove('selected', 'incorrect-match');
                    element.classList.remove('selected', 'incorrect-match');
                    selectedConnectItem = null;
                    nextButton.style.display = 'block';
                }, 1000);
            }
        }
    }
}


function handleChoice(event, selectedOption, correctAnswer) {
    if (hasAnswered) return;
    hasAnswered = true;

    const allOptions = optionsList.querySelectorAll('li');
    let isCorrect = (selectedOption === correctAnswer);

    if (isCorrect) {
        feedbackText.textContent = '¡Golpe crítico! Le has dado a tu oponente. 💪';
        feedbackText.className = 'correct';
        enemyHealth--;
        event.target.classList.add('correct-answer-highlight');
        playerFigure.style.animation = 'bounce 0.2s 2';
        enemyFigure.style.animation = 'shake 0.5s';
        setTimeout(() => {
            playerFigure.style.animation = '';
            enemyFigure.style.animation = '';
        }, 500);

    } else {
        feedbackText.textContent = `¡Has fallado! El oponente te ha golpeado. 🤕 La respuesta correcta era: ${correctAnswer}`;
        feedbackText.className = 'incorrect';
        playerHealth--;
        event.target.classList.add('incorrect-answer-highlight');
        enemyFigure.style.animation = 'bounce 0.2s 2';
        playerFigure.style.animation = 'shake 0.5s';
        setTimeout(() => {
            enemyFigure.style.animation = '';
            playerFigure.style.animation = '';
        }, 500);
        
        allOptions.forEach(optionElement => {
            if (optionElement.textContent === correctAnswer) {
                optionElement.classList.add('correct-answer-highlight');
            }
        });
    }
    
    updateHealthBars();
    nextButton.style.display = 'block';
}

function handleSubmit() {
    if (hasAnswered) return;
    
    const userAnswer = openAnswerInput.value.trim();
    if (userAnswer !== '') {
        hasAnswered = true;
        feedbackText.textContent = '';
        feedbackText.className = 'correct';
        enemyHealth--;
        playerFigure.style.animation = 'bounce 0.2s 2';
        enemyFigure.style.animation = 'shake 0.5s';
        setTimeout(() => {
            playerFigure.style.animation = '';
            enemyFigure.style.animation = '';
        }, 500);
    } else {
        feedbackText.textContent = 'Debes escribir algo para responder. El oponente te ha golpeado. 🤕';
        feedbackText.className = 'incorrect';
        playerHealth--;
        enemyFigure.style.animation = 'bounce 0.2s 2';
        playerFigure.style.animation = 'shake 0.5s';
        setTimeout(() => {
            enemyFigure.style.animation = '';
            playerFigure.style.animation = '';
        }, 500);
    }
    
    updateHealthBars();
    submitButton.style.display = 'none';
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function endGame() {
    questionContainer.style.display = 'none';
    gameTitle.style.display = 'block';
    
    if (playerHealth <= 0) {
        gameTitle.textContent = '¡Derrota!';
        gameMessage.textContent = '¡Has sido derrotado! Presiona START para una revancha.';
    } else {
        gameTitle.textContent = '¡Victoria!';
        gameMessage.textContent = '¡Has derrotado al oponente! Presiona START para jugar de nuevo.';
    }

    gameMessage.style.display = 'block';
    startButton.style.display = 'block';
}
