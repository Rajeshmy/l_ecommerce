import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,Route,RouterProvider,createRoutesFromElements } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './screens/HomePage';
import ProductPage from './screens/ProductPage';
import axios from 'axios';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

axios.defaults.baseURL= process.env.NODE_ENV === 'development'? 'http://localhost:4000' :'/'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
       <Route index={true} element={<HomePage/>}></Route>
       <Route path="product/:slug" element={<ProductPage/>}></Route>
    </Route>
  )
)

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
  </React.StrictMode>
);


