// 404.jsx
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-amber-700 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</p>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={goHome}
        className="px-6 py-3 bg-amber-600 text-white rounded-2xl shadow-md hover:bg-amber-700 transition"
      >
        Take Me Home
      </button>
    </div>
  );
};

export default ErrorPage;
