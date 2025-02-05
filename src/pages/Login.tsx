import coinsImage from "../assets/Images/coins-3344603_1920.png";
import { Link as RouterLink } from "react-router-dom";
function Login() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Form Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-6 md:px-16 bg-white flex-grow">
        <div className="max-w-lg w-full mx-auto bg-white rounded-lg shadow-lg p-8">
        <RouterLink to="/">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Mint
          </h1></RouterLink>
          <h2 className="text-lg font-semibold text-blue-600 mb-6 text-center">
            Login to your account.
          </h2>
          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="rememberMe"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-400"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-700">
                Remember Me
              </label>
            </div>
            <div className="text-center mt-8">
              <span className="text-sm text-gray-700">
                Don't have an account?{" "}
              </span>
              <RouterLink to="/signup">
              <a
                className="text-blue-600 font-semibold hover:underline transition"
              >
                Sign Up
              </a></RouterLink>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:flex w-1/2 bg-gray-700 items-center justify-center overflow-hidden">
        <img
          src={coinsImage}
          alt="Coins"
          className="w-full h-full object-cover filter brightness-50"
        />
      </div>
    </div>
  );
};

export default Login;
