import { FaSignInAlt, FaUser } from "react-icons/fa";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut, selectState, reset } from "../slices/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(selectState);

  const onSignOut = () => {
    dispatch(signOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className=" bg-slate-950">
      <div
        className="flex justify-between mx-auto p-3 lg:p-5
      items-center  text-white"
      >
        <div className="flex ">
          <Link className="text-2xl font-bold" to="/">
            MeGoal
          </Link>
        </div>
        <div className="">
          <ul className="flex space-x-6 lg:space-x-16">
            {user ? (
              <li>
                <button
                  className="flex flex-col items-center"
                  onClick={onSignOut}
                >
                  <GoSignIn /> Sign out
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link className="flex flex-col items-center" to="/login">
                    <GoSignOut /> Sign in
                  </Link>
                </li>
                <li>
                  <Link className="flex flex-col items-center" to="/register">
                    <FaUser /> Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
