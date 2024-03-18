import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { selectState } from "../slices/auth/authSlice";
import { reset } from "../slices/auth/authSlice";

import GoalForm from "../components/goalForm";
import { getGoals, selectGoals } from "../slices/goals/goalSlice";
import GoalItem from "../components/GoalItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(selectState);
  const { goals, isLoading, isError, message } = useSelector(selectGoals);

  useEffect(() => {
    if (isError) console.log(message);
    if (!user) navigate("/login");

    dispatch(getGoals());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, dispatch, message]);

  return (
    <div>
      <section className="">
        <div className="flex items-center flex-col mt-10 lg:mt-20">
          <h1 className="text-5xl lg:text-4xl font-bold">
            Welcome {user && user.name}!
          </h1>
          <p className="my-4 font-weight-700  text-3xl text-gray-500">
            Goals Dasboard
          </p>
        </div>
        <GoalForm />
      </section>

      <section className="">
        {goals.length > 0 ? (
          <div className="">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
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
