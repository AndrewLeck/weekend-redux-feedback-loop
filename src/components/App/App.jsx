import React from 'react';
import axios from 'axios';
import './App.css';
import Feelings from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
function App() {

  return (
    
    <div className='App'>
      {/* <Router> */}
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
        {/* <Link to="/api"></Link> */}
        
        {/* <Route> */}
          <Feelings />
        {/* </Route> */}
        {/* <Route> */}
          <Understanding />
        {/* </Route> */}
        {/* <Route> */}
          <Support />
        {/* </Route> */}
        {/* <Route> */}
          <Comments />
        {/* </Route> */}
        {/* <Route> */}
          <Review />
        {/* </Route> */}
      {/* </Router> */}
    </div>
    
  );
}

export default App;
