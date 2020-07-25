import React, { useEffect } from "react";
import "./App.css";
import { getQuizDetails } from "./services/Quiz_service";

function App() {
  useEffect(() => {
    async function fetchData() {
      const questions = await getQuizDetails(10, "hard");
      console.log("Your questions:", questions);
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
