import Button from '@/components/atoms/Button/Button';
import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <div className="max-w-md text-center space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-500">Oops!</h1>
        <p className="text-lg">Sorry, an unexpected error has occurred.</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <i>
            {isRouteErrorResponse(error)
              ? error.statusText
              : (error as Error).message}
          </i>
        </p>
        <Button
          onClick={handleGoBack}
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
