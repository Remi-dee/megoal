function Login() {
  return (
    <div>
      <h1>Login</h1>

      <section className="">
          <div className="w-full max-w-xs">
            <form
              action=""
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Enter your name
                </label>

                <input
                  type="text"
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Name"
                  onChange={onChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Enter your email
                </label>

                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={onChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Enter your password
                </label>

                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={onChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirm password"
                >
                  Confirm password
                </label>

                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cPassword"
                  name="cPassword"
                  value={cPassword}
                  placeholder="Password"
                  onChange={onChange}
                />

                <button className=""></button>
              </div>
            </form>
          </div>
        </section>
    </div>
  )
}

export default Login
