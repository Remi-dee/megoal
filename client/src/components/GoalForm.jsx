import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { createGoal } from "../slices/goals/goalSlice";

function GoalForm() {
<<<<<<< HEAD
  const { text, setText } = useState("");
=======
  const [text, setText] = useState("");
>>>>>>> bba9e6be6e0fc45968fe196897820d25a58b5c70

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("goal added");
    console.log(text);
    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className=" mb-4 border border-gray-200 rounded-lg bg-gray-50 mx-auto ">
          <div className="px-4 py-2 bg-white rounded-t">
            <label htmlFor="text">Your goal</label>
            <textarea
              type="text"
              id="text"
              rows="4"
              className="w-full mt-2 text-sm text-gray-900 bg-white border-0  focus:ring-0  p-4 "
              placeholder="Set your goal..."
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t">
            <button
<<<<<<< HEAD
              
=======
>>>>>>> bba9e6be6e0fc45968fe196897820d25a58b5c70
              type="submit"
              className="  items-center mx-auto  py-2.5 px-4 text-xs font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-gray-700"
            >
              Add Goal
            </button>
          </div>
        </div>
      </form>

      {/*<form onSubmit={onsubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            className="w-full mt-2 text-sm text-gray-900 bg-white border-0  focus:ring-0  p-4"
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="">
          <button className="button" type="submit">
            Add Goal
          </button>
        </div>
      </form>*/}
    </>
  );
}

export default GoalForm;
