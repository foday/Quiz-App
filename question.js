// The constructor
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

// The constructor using a prototype to add a function
Question.prototype.correctAnswer = function(choices) {
  return choices === this.answer;
};
