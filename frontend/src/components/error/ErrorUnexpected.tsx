import { useNavigate } from "react-router-dom";

const ErrorUnexpected = () => {
  const navigate = useNavigate();
  const handleReturnHome = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-10 md:px-14 max-w-2xl">
        <div className="mockup-window bg-yellow-500 shadow-lg">
          <div className="bg-base-200 flex justify-center px-4 py-20">
            <div className="flex flex-col items-center gap-3">
              <p className="text-6xl font-semibold">⚠️</p>
              <p className="text-2xl ">Unexpected Error</p>
              <p className="font-light">Something went wrong. Please try again later.</p>
              <button className="btn btn-link" onClick={handleReturnHome}>
                Click here to return to home page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorUnexpected;
