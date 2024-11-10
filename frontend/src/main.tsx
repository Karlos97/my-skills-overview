import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.scss';

import './i18n/i18n.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RecordsPage from './components/pages/RecordsPage/RecordsPage.tsx';
import Page from './components/templates/Page/Page.tsx';
import ErrorPage from './components/organisms/ErrorPage/ErrorPage.tsx';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <div> About page!</div>,
      },
      {
        path: 'simple-app',
        element: <RecordsPage />,
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
