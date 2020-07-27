import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/Quiz_service";
import { QuestionType } from "./types/Quiz_types";
import { QuestionCard } from "./components/QuestionCard";
import HashLoader from "react-spinners/HashLoader";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(3, "hard");
      // console.log("Your questions:", questions);
      setQuiz(questions);
    }
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion = quiz[currentStep];
    // console.log(
    //   "Correct ans is: " +
    //     currentQuestion.correct_answer +
    //     "User selection is: " +
    //     userAns
    // );
    if (userAns === currentQuestion.correct_answer) {
      setScore(++score);
    }
    if (currentStep !== quiz.length - 1) setCurrentStep(++currentStep);
    else {
      alert(
        "Quiz is completed your final score is : " +
          score +
          " Out of : " +
          quiz.length
      );
      setCurrentStep(0);
      setScore(0);
    }
  };

  if (!quiz.length)
    return (
      <div className="container" style={{ height: "100vh" }}>
        <div className="row h-100">
          <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto d-flex align-items-center justify-content-center">
            <HashLoader color={"#123abc"} size="80px"></HashLoader>
          </div>
        </div>
      </div>
    );
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-12 col-sm-11 col-md-9 col-lg-8 d-flex justify-content-center align-items-end my-4">
          <span>
            <h1 className="text-white">Quiz Application</h1>
          </span>
        </div>

        <QuestionCard
          options={quiz[currentStep].option}
          question={quiz[currentStep].question}
          callback={handleSubmit}
        ></QuestionCard>
      </div>
    </div>
  );
}

export default App;
