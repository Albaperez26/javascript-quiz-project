class Quiz {
    // YOUR CODE HERE:
    //
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    
    moveToNextQuestion() {
        return this.currentQuestionIndex += 1;
    }

    shuffleQuestions() {
        for (let i = this.questions.length -1; i > 0; i--){
            const j = Math.floor(Math.random()*(i+1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]]; 
        }
    }

    checkAnswer(answer) {

        const trueQuestion = this.questions[this.currentQuestionIndex];
        if ( this.answer === trueQuestion.correctAnswers) {
            this.correctAnswers +=1;
            return true;
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        }
        else if (this.currentQuestionIndex = this.questions.length) {
            return true;
        }
    }

    filterQuestionsByDifficulty(difficulty) {
        if ( difficulty >= 1 && difficulty <= 3) {
            this.questions = this.questions.filter(question => question.difficulty === difficulty);
        }
    } // lo que hace el condicional es que si se cumple la condición, this.question pasa a "filtrar" la dificultad
    // asignada a cada una de las preguntas, y solo quedará en this.question las que cumplan con la dificultad que propone el código
    // es decir de 1 a 3.

    averageDifficulty() {
        //should return the average difficulty (number) of the questions in the quiz
        const totaldificultad = this.questions.reduce((sum, question) => sum + question.difficulty, 0);
        // esto suma todas las dificultades de las preguntas en la variable totaldificultad, 
        //con el .reduce recorremos el array y acumula el valor de question.difficulty
        return totaldificultad / this.questions.length;
        //divide la suma de dificultades entre la cantidad de preguntas y nos da como resultado el rpomedio de dificultad
    }


}