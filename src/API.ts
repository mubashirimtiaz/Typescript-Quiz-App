import axios from "axios";
import { shufferArrayElem } from "./Utilities";

export type quizQuestions = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
export type quizQuestionsState = quizQuestions & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
export const fetchQuestions = async (
  questions: number,
  difficulty: Difficulty
) => {
  const baseUrl = `https://opentdb.com/api.php?amount=${questions}&diffculty=${difficulty}&type=multiple`;
  try {
    const {
      data: { results },
    } = await axios(baseUrl);
    return results.map((ques: quizQuestions) => {
      return {
        ...ques,
        answers: shufferArrayElem([
          ...ques.incorrect_answers,
          ques.correct_answer,
        ]),
      };
    });
  } catch (error) {
    console.log(error);
  }
};
