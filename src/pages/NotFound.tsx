import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-9xl font-extrabold text-blue-700">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to={'/'}
          className="mt-6 inline-flex items-center space-x-2 px-6 py-3 bg-blue-700 text-white font-medium rounded-md shadow-md hover:bg-blue-800 transition duration-300"
        >
          <FaHome className="text-xl" />
          <span>Go to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;