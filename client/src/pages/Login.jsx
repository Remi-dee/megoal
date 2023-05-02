import { useState, useEffect } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <section className="flex flex-col mx-auto items-center bg-gray-50">
        {/*Title Head*/}
        <div className="flex items-center flex-col mt-10 lg:mt-20">
          <div className="flex items-end">
            <FaUser className="mr-3 h-11 w-7 lg:w-8" />
            <h1 className="text-3xl lg:text-4xl font-bold">Sign up</h1>
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
              <label className="label" htmlFor="password">
                Password
              </label>

              <input
                type="text"
                className="input"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
              />
            </div>

            <button className="button">Sign up</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
