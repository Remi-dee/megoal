import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" bg-slate-950">
      <div className="flex justify-between mx-auto p-3 lg:p-5
      items-center  text-white">
        <div className="flex ">
          <Link className="text-2xl font-bold" to="/">MeGoal</Link>
        </div>
        <div className="">
          <ul className="flex space-x-6 lg:space-x-16">
            <li>
              <Link className="flex flex-col items-center" to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>

            <li>
              <Link className="flex flex-col items-center" to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
