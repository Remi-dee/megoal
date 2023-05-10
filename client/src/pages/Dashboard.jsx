import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { selectState } from "../slices/auth/authSlice";
import { reset, selectGoals } from "../slices/goals/goalSlice";

import GoalForm from "../components/goalForm";
import { getGoals } from "../slices/goals/goalSlice";
import GoalItem from "../components/GoalItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch;
  const { user } = useSelector(selectState);
  const { goals, isLoading, isError, message } = useSelector(selectGoals);

  useEffect(() => {
    if (isError) console.log(message);
    if (!user) navigate("/login");

    dispatch(getGoals());

    if (isLoading) return <Spinner />;
  }, [user, navigate, isError, dispatch, isLoading, message]);

  return (
    <div>
      <section className="">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dasboard</p>
        <GoalForm />
      </section>

      <section className="">
        {goals.length > 0 ? (
          <div className="">
            {goals.map((goal) => (
              <GoalItem key={goal._id} />
            ))}
          </div>
        ) : (
          <h3>No goals yet</h3>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
