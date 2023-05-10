import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { signIn, reset, selectState } from "../slices/auth/authSlice";
import { createGoal } from "../slices/goals/goalSlice";

function GoalForm() {
  const {text, setText} = useState("")

  const dispatch= useDispatch()

  const onSubmit = (e) => {
e.preventFault()

dispatch(createGoal(text))
setText("")
  }
  
    return (
    <form onSubmit={onsubmit}>
      <div className="form-group">
        <label htmlFor="text">Goal</label>
        <input type="text" id="text" value={text}
        onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className="">
        <button className="button" type="submit">Add Goal</button>
      </div>
     
    </form>
  )
}

export default GoalForm
