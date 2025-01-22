const App = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
              facebook
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-gray-600">
              Connect with friends and the world around you on Facebook.
            </p>
          </div>
          {/* Right Section */}
          <div className="bg-white shadow-md rounded-md p-6 w-full max-w-sm">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Email or phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Log In
              </button>
              <div className="text-center mt-4">
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
              <hr className="my-6 border-gray-300" />
              <button
                type="button"
                className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Create new account
              </button>
            </form>
            <p className="text-center mt-6 text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Create a Page
              </a>{" "}
              for a celebrity, brand, or business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
