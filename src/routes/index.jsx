import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import ResultPage from '../pages/ResultPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/result',
    children: [{ path: ':userId', element: <ResultPage /> }],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
