function populate() {
  if (quiz.isEnded()) {
    //showscores
  } else {
    //show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
    }
  }
};


var questions = [
  new Question("blah blah blah"),
  new Question("blah blah blah"),
  new Question("blah blah blah"),
  new Question("blah blah blah"),
  new Question("blah blah blah")
];

var quiz = new Quiz(questions);

populate();
