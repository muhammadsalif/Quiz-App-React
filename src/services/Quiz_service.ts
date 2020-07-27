import { Quiz, QuestionType } from "../types/Quiz_types";

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const getQuizDetails = async (
  totalQuestions: number,
  level: string
): Promise<QuestionType[]> => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`
  );

  const { results } = await response.json();

  const quiz: QuestionType[] = results.map((questionObj: Quiz) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      correct_answer: questionObj.correct_answer,
      option: shuffleArray(
        questionObj.incorrect_answers.concat(questionObj.correct_answer)
      ),
    };
  });

  return quiz;
};
