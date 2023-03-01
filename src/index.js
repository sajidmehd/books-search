import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './index.css';
import { store } from './store/store'
import { Provider } from 'react-redux'
import BookDetail from './pages/BookDetail';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bookdetail/:id/" element={<BookDetail/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

