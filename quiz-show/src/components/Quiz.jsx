import { useState } from "react";
import QUESTIONS from "../questions";
import completedLogo from "../assets/quiz-complete.png";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const activeQuestionIndex = userAnswers.length;

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  if (isQuizComplete) {
    return (
      <div id="summary">
        <img src={completedLogo} />
        <h2>Quiz Completed</h2>
        <h4>Your Score: {score}</h4>
        <h4>Wrong Answers: {QUESTIONS.length - score}</h4>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  const handleAnswerSelect = (selectedAnswer) => {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
    if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li className="answer" key={answer}>
              <button onClick={() => handleAnswerSelect(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
