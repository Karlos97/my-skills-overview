import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.scss';
import './i18n/i18n.ts';

import RecordsPage from '@pages/RecordsPage/RecordsPage';
import Page from '@templates/Page/Page';
import HomePage from '@pages/HomePage/HomePage';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import ChatPage from '@pages/ChatPage/ChatPage.tsx';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'simple-app',
        element: <RecordsPage />,
      },
      {
        path: 'chat',
        element: <ChatPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
