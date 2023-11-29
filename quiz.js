const quizData = [
    {
      question: " ¿Cuántos minutos tiene una hora?",
      options: ["60'", "30'", "120'", "90'"],
      answer: 0
      
    },
    {
      question: "¿Cuál es el río más largo del mundo?",
      options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
      answer: 1
    },
     {
      question: "¿Cuántas patas tiene una araña?",
      options: ["6", "4", "8", "12"],
      answer: 2
    },
    {
      question: "¿En qué continente se encuentra Chile?",
      options: [" África", "Oceanía", "Asia", "América"],
      answer: 3
    },
    {
      question: "¿Cual es la capital de Chile?",
      options: ["Talca", "Antofagasta", "Santiago", "Valdivia"],
      answer: 2
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElements = document.getElementsByClassName("option");
  const submitButton = document.getElementById("submit-btn");
  
  function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  
    for (let i = 0; i < optionsElements.length; i++) {
      optionsElements[i].innerText = currentQuizData.options[i];
    }
  }
  
  function checkAnswer() {
    let selectedOption = -1;
  
    for (let i = 0; i < optionsElements.length; i++) {
      if (optionsElements[i].classList.contains("selected")) {
        selectedOption = i;
        break;
      }
    }
  
    if (selectedOption === quizData[currentQuestion].answer) {
      score++;
    }
  
    for (let i = 0; i < optionsElements.length; i++) {
      optionsElements[i].classList.remove("selected");
    }
  
    if (currentQuestion < quizData.length - 1) {
      currentQuestion++;
      loadQuestion();
    } else {
      // Fin del juego
      alert("Juego terminado. Tu puntuación es: " + score);
    }
  }
  
  loadQuestion();
  
  for (let i = 0; i < optionsElements.length; i++) {
    optionsElements[i].addEventListener("click", function() {
      for (let j = 0; j < optionsElements.length; j++) {
        optionsElements[j].classList.remove("selected");
      }
      this.classList.add("selected");
    });
  }
  
  submitButton.addEventListener("click", checkAnswer);