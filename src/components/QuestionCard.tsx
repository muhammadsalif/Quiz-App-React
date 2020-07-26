import React from "react";
import { questionPropsType } from "../types/Quiz_types";

export const QuestionCard: React.FC<questionPropsType> = ({
  question,
  options,
  callback,
}) => {
  console.log(question, options);
  return (
    <div>
      <div className="question-container">
        <div className="question">{question}</div>
        <form
          onSubmit={callback}
          action="
          "
        >
          {options.map((opt: string, ind: number) => {
            return (
              <div key={ind}>
                <label htmlFor="">
                  <input type="radio" name="opt" value={opt} />
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
