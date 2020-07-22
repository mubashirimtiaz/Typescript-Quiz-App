import React from "react";
import { answerObj } from "../App";
import { ButtonWrapper } from "./QuestionsCard.styles";
import { Wrapper } from "../App.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: answerObj;
  questionNr: number;
  totalQuestionsNr: number;
};
const QuestionsCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestionsNr,
}) => {
  return (
    <Wrapper>
      <p>
        {questionNr} / {totalQuestionsNr}
      </p>
      <p>{question}</p>
      {answers.map((ans) => {
        return (
          <ButtonWrapper
            key={Math.random()}
            correct={userAnswer?.correctAnswer === ans}
            userClicked={userAnswer?.answer === ans}
          >
            <button disabled={!!userAnswer} value={ans} onClick={callback}>
              <span>{ans}</span>
            </button>
            <br />
          </ButtonWrapper>
        );
      })}
    </Wrapper>
  );
};

export default QuestionsCard;
