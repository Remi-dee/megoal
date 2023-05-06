import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { register, reset, selectState } from "../slices/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cPassword: "",
  });

  const { name, email, mobile, password, cPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } =
    useSelector(selectState);

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess || user) navigate("/");
    if (isSuccess) toast.success(`Welcome ${user.name}`);

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
    if (password !== cPassword) {
      toast.error("Password do not match!");
    } else {
      const userData = {
        name,
        email,
        mobile,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <section className="flex flex-col mx-auto items-center bg-gray-50">
        {
          // Title Head
        }
        <div className="flex items-center flex-col mt-10 lg:mt-20">
          <div className="flex items-end">
            <FaUser className="mr-3 h-11 w-7 lg:w-8" />
            <h1 className="text-3xl lg:text-4xl font-bold">Sign up</h1>
          </div>

          <p className="my-4 text-lg text-gray-400">Kindly create an account</p>
        </div>

        {/*Register Form*/}

        <div className="">
          <form
            action=""
            onSubmit={onSubmit}
            className="bg-white p-10 w-full md:space-y-6 "
          >
            <div className="mb-4">
              <label className="label">Your name</label>

              <input
                type="text"
                className="input"
                id="name"
                name="name"
                value={name}
                placeholder="Name"
                onChange={onChange}
              />
            </div>

            <div className="mb-4">
              <label className="label" htmlFor="email">
                Your email
              </label>

              <input
                type="text"
                className="input"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={onChange}
              />
            </div>

            <div className="mb-4">
              <label className="label" htmlFor="email">
                Your phone number
                <span className="text-xs text-gray-400">(optional)</span>
              </label>

              <input
                type="text"
                className="input"
                id="mobile"
                name="mobile"
                value={mobile}
                placeholder="mobile"
                onChange={onChange}
              />
            </div>
            <div className="flex ">
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

              <div className="mb-4 ml-4">
                <label className="label" htmlFor="confirm password">
                  Confirm password
                </label>

                <input
                  type="password"
                  className="input"
                  id="cPassword"
                  name="cPassword"
                  value={cPassword}
                  placeholder="Password"
                  onChange={onChange}
                />
              </div>
            </div>
            <button className="button">Sign up</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
