import React, { useState } from "react";
import { questionPropsType } from "../types/Quiz_types";

export const QuestionCard: React.FC<questionPropsType> = ({
  question,
  options,
  callback,
}) => {
  // console.log(question, options);

  let [selectedAns, setSelectedAns] = useState("");

  const handleSelection = (e: any) => {
    setSelectedAns(e.target.value);
  };

  return (
    <div>
      <div className="question-container">
        <div className="question">{question}</div>
        <form
          onSubmit={(e: React.FormEvent<EventTarget>) =>
            callback(e, selectedAns)
          }
          action="
          "
        >
          {options.map((opt: string, ind: number) => {
            return (
              <div key={ind}>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="opt"
                    value={opt}
                    onChange={handleSelection}
                    required
                    checked={selectedAns === opt}
                  />
                  {opt}
                </label>
              </div>
            );
          })}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
