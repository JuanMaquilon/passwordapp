import React from 'react';
import LoginForm from './loginForm';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='leftPanel'>
        <LoginForm />
      </div>
      <div className='rightPanel hide_on_narrow'>Right Panel</div>
    </div>
  );
}

export default App;
