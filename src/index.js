import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Letter from './pages/letter';
import About from './pages/about';
import Register from './pages/register';
import Login from './pages/login';
import { BrowserRouter , Routes , Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/letter' element={<Letter />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);