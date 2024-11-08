import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from 'features/system/Loader';
//Providers
import StoreProvider from './StoreProvider';
import RouterProvider from './RouterProvider';
import ToastProvider from './ToastProvider';
//styles
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import 'versoly-ui';

export function Provider() {
  return (
    <React.StrictMode>
      <ToastProvider />
      <StoreProvider>
        <BrowserRouter>
          <React.Suspense fallback={<Loader />}>
            <RouterProvider />
          </React.Suspense>
        </BrowserRouter>
      </StoreProvider>
    </React.StrictMode>
  );
}
