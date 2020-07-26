import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/Quiz_service";
import { QuestionType } from "./types/Quiz_types";
import { QuestionCard } from "./components/QuestionCard";
import HashLoader from "react-spinners/HashLoader";

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(3, "hard");
      console.log("Your questions:", questions);
      setQuiz(questions);
    }
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion = quiz[currentStep];
    console.log(
      "Correct ans is :" +
        currentQuestion.correct_answer +
        "User selection" +
        userAns
    );
    if (userAns === currentQuestion.correct_answer) {
      setScore(++score);
    }
    if (currentStep !== quiz.length - 1) setCurrentStep(++currentStep);
    else {
      alert(
        "Quiz is completed your final score is :" +
          score +
          "---out of :" +
          quiz.length
      );
      setCurrentStep(0);
      setScore(0);
    }
  };

  if (!quiz.length)
    return (
      <div>
        <HashLoader color={"#123abc"}></HashLoader>
      </div>
    );
  return (
    <div>
      <QuestionCard
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      ></QuestionCard>
    </div>
  );
}

export default App;
