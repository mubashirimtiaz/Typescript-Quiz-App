import React, { useState } from "react";
import QuestionCard from "./components/QuestionsCard";
import { fetchQuestions, Difficulty, quizQuestionsState } from "./API";
import "./App.css";
import { GlobalStyle, Wrapper } from "./App.styles";

export type answerObj = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const totalQuestion: number = 10;
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<quizQuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<answerObj[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const fetchedData = async () => {
      const data = await fetchQuestions(totalQuestion, Difficulty.EASY);
      setQuestions(data);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    };
    fetchedData();
  };

  console.log(questions);
  console.log(userAnswers);

  const checkQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === totalQuestion) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  console.log(questions, userAnswers);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz</h1>
        {gameOver || userAnswers.length === totalQuestion ? (
          <button onClick={startQuiz} className="start">
            {!gameOver ? "Restart" : "Start"}
          </button>
        ) : null}
        {!gameOver && <p className="score">score: {score}</p>}
        {loading && <div className="loader"></div>}
        {!gameOver && !loading && number !== totalQuestion ? (
          <QuestionCard
            question={questions[number].question}
            answers={questions[number].answers}
            callback={checkQuestion}
            userAnswer={userAnswers && userAnswers[number]}
            questionNr={number + 1}
            totalQuestionsNr={questions.length}
          />
        ) : (
          ""
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== totalQuestion - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
