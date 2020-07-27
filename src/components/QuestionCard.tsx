import React, { useState } from "react";
import { questionPropsType } from "../types/Quiz_types";

export const QuestionCard: React.FC<questionPropsType> = ({
  question,
  options,
  callback,
}) => {
  let [selectedAns, setSelectedAns] = useState("");

  const handleSelection = (e: any) => {
    setSelectedAns(e.target.value);
  };

  return (
    <div className="col-12 col-sm-11 col-md-9 col-lg-8 d-flex justify-content-center align-items-center flex-column m-auto shadow py-5 questionCard rounded">
      {/* Heading div */}

      <div className="text-center bg-transparent">
        <h4 className="mb-2 text-white bg-transparent font-weight-bold">
          {question}
        </h4>
      </div>

      {/* Form div */}
      <div className="w-100 ">
        <form
          style={{ width: "100%" }}
          className="questionCard"
          onSubmit={(e: React.FormEvent<EventTarget>) =>
            callback(e, selectedAns)
          }
          action="
          "
        >
          {options.map((opt: string, ind: number) => {
            return (
              <div key={ind} className="d-flex questionCard">
                <label
                  className="col-12 col-sm-11 col-md-9 p-0 col-lg-8 my-2 btn  mx-auto btn-success "
                  htmlFor=""
                >
                  <input
                    // type="radio"
                    type="button"
                    name="opt"
                    value={opt}
                    onChange={handleSelection}
                    // required
                    checked={selectedAns === opt}
                    onClick={handleSelection}
                    className="bg-success border-0 text-white w-100 h-100 py-2"
                  ></input>
                </label>
              </div>
            );
          })}
          <div className="questionCard d-flex">
            <button
              className="col-12 col-sm-11 col-md-9 col-lg-8 my-2 text-white font-weight-bolder btn mx-auto "
              style={{ backgroundColor: "#123abc" }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
