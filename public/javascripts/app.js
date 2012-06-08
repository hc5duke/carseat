$(function($){
  var answers = []
  var currentQuestion = 1;
  var numQuestions = $('.question').length;
  var moreQuestions = function() {
    console.log([currentQuestion, numQuestions, currentQuestion < numQuestions])
    return currentQuestion < numQuestions;
  };
  var showAnswer = function() {
    $('#buttons').fadeOut(400, function(){
      fadeTransition('#answer');
    });
  };
  var nextQuestion = function() {
    fadeTransition();
    $('#yes, #no').attr('disabled', true);
  };
  var fadeTransition = function(nextId) {
    var currentId = '#q' + currentQuestion;
    if (!nextId) {
      currentQuestion += 1;
      nextId = '#q' + currentQuestion;
    }
    $(currentId).fadeOut(400, function(){
      fadeIn(nextId);
    });
  }
  var fadeIn = function(nextId) {
    var next = $(nextId);
    next.fadeIn();
    var yes = next.attr('data-answer-yes');
    var no = next.attr('data-answer-no');
    $('#yes').text(yes);
    $('#no').text(no);
    $('#yes, #no').attr('disabled', false);
  };
  $('#yes').click(function(){
    answers.push('1');
    if (moreQuestions()) {
      nextQuestion();
    } else {
      showAnswer();
    }
  });
  $('#no').click(function(){
    answers.push('0');
    if (moreQuestions()) {
      nextQuestion();
    } else {
      showAnswer();
    }
  });

  $('#q1').animate({ opacity: 1.0 }, 1500);
  fadeIn('#q1');
});
