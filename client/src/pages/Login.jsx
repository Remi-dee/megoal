import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { signIn, reset, selectState } from "../slices/authSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } =
    useSelector(selectState);

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess || user) navigate("/");

    if (isSuccess) toast.success(`Welcome back ${user.name}`);

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(signIn(userData));
  };

  if (isLoading) {
    //toast.pending("Loading");
    return <Spinner />;
  }

  return (
    <>
      <section className="flex flex-col mx-auto items-center bg-gray-50">
        {/*Title Head*/}
        <div className="flex items-center flex-col mt-10 lg:mt-20">
          <div className="flex items-end">
            <FaUser className="mr-3 h-11 w-7 lg:w-8" />
            <h1 className="text-3xl lg:text-4xl font-bold">Sign in</h1>
          </div>

          <p className="my-4 text-lg text-gray-400">
            Login and start your goal adventure
          </p>
        </div>

        {/*Register Form*/}

        <div className="">
          <form
            action=""
            onSubmit={onSubmit}
            className="bg-white p-10 w-full md:space-y-6 "
          >
            <div className="mb-4">
              <label className="label" htmlFor="email">
                Your email
              </label>

              <input
                type="email"
                className="input"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={onChange}
              />
            </div>

            <div className="mb-4">
              <label className="label" htmlFor="password">
                Password
              </label>

              <input
                type="password"
                className="input"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
              />
            </div>

            <button className="button">Sign in</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
