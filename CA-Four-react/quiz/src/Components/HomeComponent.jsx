// HomeComponent.jsx
import React from 'react';
import '../App.css';

const HomeComponent = ({ pageProp }) => {
  const startQuiz = () => {
    pageProp(1);
  };

  return (
    <div className='body1'>
      <button className='start' onClick={startQuiz}>
        START
      </button>
    </div>
  );
};

export default HomeComponent;