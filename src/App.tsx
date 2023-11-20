import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './scss/app.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,

      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'Cart',
          element: <Cart />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
