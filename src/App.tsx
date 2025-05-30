import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />
	},
  {
    path: '*',
    element: <PageNotFound />
  }
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
