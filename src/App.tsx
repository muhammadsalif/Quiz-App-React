import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/Quiz_service";
import { QuestionType } from "./types/Quiz_types";
import { QuestionCard } from "./components/QuestionCard";
import HashLoader from "react-spinners/HashLoader";

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(3, "hard");
      console.log("Your questions:", questions);
      setQuiz(questions);
    }
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (currentStep !== quiz.length - 1) setCurrentStep(++currentStep);
    else {
      alert("Quiz is completed");
      setCurrentStep(0);
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
