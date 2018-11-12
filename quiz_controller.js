// The constructor
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

// PROTOTYPE: The quiz constructor using prototype to add function
Quiz.prototype.getQuestionIndex = function() {
  return this.questions(this.questionIndex);
};

// PROTOTYPE: Using a prototype to add a function
Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
};

// PROTOTYPE:
Quiz.prototype.guess = function(answer) {
  this.questionIndex++;

  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
};
