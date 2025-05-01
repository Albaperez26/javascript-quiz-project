document.addEventListener("DOMContentLoaded", () => {
  /************  HTML ELEMENTS  ************/
  // View divs
  const quizView = document.querySelector("#quizView");
  const endView = document.querySelector("#endView");

  // Quiz view elements
  const progressBar = document.querySelector("#progressBar");
  const questionCount = document.querySelector("#questionCount");
  const questionContainer = document.querySelector("#question");
  const choiceContainer = document.querySelector("#choices");
  const nextButton = document.querySelector("#nextButton");

  // End view elements
  const resultContainer = document.querySelector("#result");


  /************  SET VISIBILITY OF VIEWS  ************/

  // Show the quiz view (div#quizView) and hide the end view (div#endView)
  quizView.style.display = "block";
  endView.style.display = "none";


  /************  QUIZ DATA  ************/
  
  // Array with the quiz questions
  const questions = [
    new Question("¿Qué pasaría si los gatos dominaran el mundo?", ["Obligarían a los humanos a abrir latas todo el día", "Inventarían un rascador para humanos", "Cambiarían las reglas del ajedrez para que solo gane el gato", " Nada. Ya lo dominan, solo que no te has dado cuenta"], " Nada. Ya lo dominan, solo que no te has dado cuenta", 1),
    new Question("¿Qué significa cuando Jorge pone patata como nombre de variable o palabra en el código?", ["Que tenía hambre y su código lo sabe.", "Que ha activado el modo secreto fruta o verdura del lenguaje de programación.", "Que patata es un algoritmo de inteligencia artificial que lo resuelve todo mágicamente.", "Que está usando un valor hardcoded como placeholder mientras piensa en algo mejor."], "Que tenía hambre y su código lo sabe.", 1),
    new Question("¿Qué sucede con tu vida social cuando comienzas un curso intensivo?", ["Tienes tantas tareas que incluso tus amigos piensan que te mudaste a otro planeta.", "Tu vida social se convierte en el grupo de WhatsApp del curso, y es lo único que sabes de la humanidad exterior.", " Te conviertes en un zombi estudiantil que responde a todo con ¿Qué día es hoy?", "Empiezas a hablar con tu taza de café porque ya es tu única amiga."], "Empiezas a hablar con tu taza de café porque ya es tu única amiga.", 2),
    new Question("¿Quién merece el título de Mejor Gato de la Historia (con corona, trono y plato infinito de atún)?", ["Buzz, ft. Amalia", "Tom", "Garfield", "Gato con botas"], "Buzz, ft. Amalia", 3),
    // Add more questions here
  ];
  const quizDuration = 120; // 120 seconds (2 minutes)


  /************  QUIZ INSTANCE  ************/
  
  // Create a new Quiz instance object
  const quiz = new Quiz(questions, quizDuration, quizDuration);
  console.log(quiz)
  // Shuffle the quiz questions
  quiz.shuffleQuestions();


  /************  SHOW INITIAL CONTENT  ************/

  // Convert the time remaining in seconds to minutes and seconds, and pad the numbers with zeros if needed
  const minutes = Math.floor(quiz.timeRemaining / 60).toString().padStart(2, "0");
  const seconds = (quiz.timeRemaining % 60).toString().padStart(2, "0");

  // Display the time remaining in the time remaining container
  const timeRemainingContainer = document.getElementById("timeRemaining");
  timeRemainingContainer.innerText = `${minutes}:${seconds}`;

  // Show first question
  showQuestion();


  /************  TIMER  ************/

  let timer;


  /************  EVENT LISTENERS  ************/

  nextButton.addEventListener("click", nextButtonHandler);



  /************  FUNCTIONS  ************/

  // showQuestion() - Displays the current question and its choices
  // nextButtonHandler() - Handles the click on the next button
  // showResults() - Displays the end view and the quiz results



  function showQuestion() {
    // If the quiz has ended, show the results
    if (quiz.hasEnded()) {
      showResults();
      return;
    }

    // Clear the previous question text and question choices
    questionContainer.innerText = "";
    choiceContainer.innerHTML = "";

    // Get the current question from the quiz by calling the Quiz class method `getQuestion()`
    const question = quiz.getQuestion();
    console.log(question)
    // Shuffle the choices of the current question by calling the method 'shuffleChoices()' on the question object
    question.shuffleChoices();
    
    

    // YOUR CODE HERE:
    //
    // 1. Show the question
    // Update the inner text of the question container element and show the question text
    questionContainer.innerText = question.text

    
    
    // 2. Update the green progress bar
    // Update the green progress bar (div#progressBar) width so that it shows the percentage of questions answered
    
    progressBar.style.width = `${(quiz.currentQuestionIndex + 1) / (quiz.questions.length) * 100}%` ; // This value is hardcoded as a placeholder



    // 3. Update the question count text 
    // Update the question count (div#questionCount) show the current question out of total questions
    
    questionCount.innerText = `Question ${quiz.currentQuestionIndex + 1} of ${quiz.questions.length}`; //  This value is hardcoded as a placeholder
    

    
    // 4. Create and display new radio input element with a label for each choice.
    // Loop through the current question `choices`.
      // For each choice create a new radio input with a label, and append it to the choice container.
      // Each choice should be displayed as a radio input element with a label:
      /* 
          <input type="radio" name="choice" value="CHOICE TEXT HERE">
          <label>CHOICE TEXT HERE</label>
        <br>
      */
      // Hint 1: You can use the `document.createElement()` method to create a new element.
      // Hint 2: You can use the `element.type`, `element.name`, and `element.value` properties to set the type, name, and value of an element.
      // Hint 3: You can use the `element.appendChild()` method to append an element to the choices container.
      // Hint 4: You can use the `element.innerText` property to set the inner text of an element.
     
      question.choices.forEach(eachChoice => {
        const radioInput = document.createElement("div");
        radioInput.innerHTML = `
        <input type="radio" name="choice" value="${eachChoice}">
        <label>${eachChoice}</label>
        <br>`; 
        choiceContainer.appendChild(radioInput); 
      });




  }




  
  function nextButtonHandler () {
    let selectedAnswer; // A variable to store the selected answer value



    // YOUR CODE HERE:
      

    //
    // 1. Get all the choice elements. You can use the `document.querySelectorAll()` method.
      

    // 2. Loop through all the choice elements and check which one is selected
      // Hint: Radio input elements have a property `.checked` (e.g., `element.checked`).
      //  When a radio input gets selected the `.checked` property will be set to true.
      //  You can use check which choice was selected by checking if the `.checked` property is true.

      
    // 3. If an answer is selected (`selectedAnswer`), check if it is correct and move to the next question
      // Check if selected answer is correct by calling the quiz method `checkAnswer()` with the selected answer.
      // Move to the next question by calling the quiz method `moveToNextQuestion()`.
      // Show the next question by calling the function `showQuestion()`.

      const choiceElements = document.querySelectorAll("input")
      choiceElements.forEach(eachResponse => {
        if(eachResponse.checked) {
          selectedAnswer = eachResponse.value;
        }
      });

      if(selectedAnswer) {
        quiz.checkAnswer(selectedAnswer)
        quiz.moveToNextQuestion();
        showQuestion();
      }
      
      
      
      
    
      
  }  




  function showResults() {

    // YOUR CODE HERE:
    //
    // 1. Hide the quiz view (div#quizView)
    const quizView = document.querySelector("div#quizView")
    quizView.style.display = "none";

    // 2. Show the end view (div#endView)
    const endView = document.querySelector("div#endView")
    endView.style.display = "flex";
    
    // 3. Update the result container (div#result) inner text to show the number of correct answers out of total questions
    const resultContainer = document.querySelector("div#result")
    resultContainer.innerText = `You scored ${quiz.correctAnswers} out of ${quiz.currentQuestionIndex} correct answers!`; // This value is hardcoded as a placeholder
  }
  
});


//${quiz.currentQuestionIndex + 1} of ${quiz.questions.length}`
//${(quiz.currentQuestionIndex + 1) / (quiz.questions.length) * 100}%` 