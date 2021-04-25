const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

const quizQuestions = [
    { question: "Luke Burgess is currently doing a PhD in:",
    answers: {
        a: "Use of high flow nasal prongs in COVID",
        b: "Evidence-based pain management in the ED",
        c: "Nursing ratios in the ED",
        d: "ED nurse sleep patterns"
    },
    correctAnswer: "b"
},
{ question: "Luke works at:",
answers: {
    a: "Princess Alexandra Hospital",
    b: "QEII Hospital",
    c: "Queeensland Childrens Hospital",
    d: "Mater Adults Hospital"
},
correctAnswer: "d"
},
{ question: "Lukes research focuses on what nurse activity",
answers: {
    a: "nurse-led discharge",
    b: "nurse practitioners",
    c: "nurse-initiated interventions",
    d: "nurse practitioners"
},
correctAnswer: "c"
},
{ question:"Luke is passionate about:",
answers: { 
    a: "efficient health practices",
    b: "evidence-based health care",
    c: "nurses getting breaks",
    d: "nurse union membership"
},
correctAnswer: "b"
}
];

function buildQuiz() {

    // variable to store the HTML output
    const output = [];
    for(i=0; i<quizQuestions.length; i++){
        // variable to store the list of possible answers
        const answers = [];
    // for each available answer to this question add a html radio button
for(letter in quizQuestions[i].answers){

    answers.push(
        '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + quizQuestions[i].answers[letter]
        + '</label>'
        );
    }    
    // add this question and its answers to the output
    output.push(
        '<div class="question">' + quizQuestions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
// combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
}

function showResults() {
// gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');

      // keep track of user's answers
      var numCorrect = 0;

      // for each question...
      for(i=0; i<quizQuestions.length; i++){
        // find selected answer
   userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      // if answer is correct
if(userAnswer===quizQuestions[i].correctAnswer){

    // add to the number of correct answers
    numCorrect++;
  
    // color the answers green
    answerContainers[i].style.color = 'lightgreen';
    }
  
    // if answer is wrong or blank
      else{
  
      // color the answers red
          answerContainers[i].style.color = 'red';
      }
}


      if (numCorrect === 0) { 
        resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
            } 
    if (numCorrect === 1) {
        resultsContainer.innerHTML = "There’s room for improvement there! You only got one correct answer.";
    }
    if (numCorrect === 2) {
        resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your reponses. Have another go to see if you cna improve on that!";
    }
    if (numCorrect === 3) {
        resultsContainer.innerHTML = "Congratulations! You got a score of 3 out of 4 for your reponses. You know Luke pretty well!";
    }
    if (numCorrect === 4) {
        resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Luke so well!";
    }
}
//load quiz
buildQuiz();
submitButton.onclick = function() {
    showResults();
  }
