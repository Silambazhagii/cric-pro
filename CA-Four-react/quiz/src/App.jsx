import React, { useState } from 'react';
import HomeComponent from './Components/HomeComponent.jsx';
import QuizComponent from './Components/QuizComponent.jsx';
import ResultComponent from './Components/ResultComponent.jsx';

function App() {
  const [page, setPage] = useState(0);
  const [score, setScore] = useState(0);

  const pageUp = (pageNo) => {
    setPage(pageNo);
  };

  if (page === 0) {
    return <HomeComponent pageProp={pageUp} />;
  } else if (page === 1) {
    return <QuizComponent pageProp={pageUp} setScore={setScore} />;
  } else if (page === 2) {
    return <ResultComponent pageProp={pageUp} score={score} setScore={setScore} />;
  }

  // Additional logic or components can be added here if needed
}

export default App;
