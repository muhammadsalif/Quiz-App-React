import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/Quiz_service";
import { Quiz } from "./types/Quiz_types";

function App() {
  let [quiz, setQuiz] = useState<Quiz[]>([]);

  useEffect(() => {
    async function fetchData() {
      const questions: Quiz[] = await getQuizDetails(10, "hard");
      console.log("Your questions:", questions);
      setQuiz(questions);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
}

export default App;
