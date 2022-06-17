import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import './App.css';
import Feelings from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
function App() {
const dispatch = useDispatch();

useEffect(() => {
fetchFeedBack()
},[])

const fetchFeedBack = () =>{
  axios({
    method: 'GET',
    url:''
  })
  .then((response) =>{
    dispatch({
      type:'SET_FEEDBACK',
      payload: response.data
    });
    console.log('What are we getting', response.data)
  })
  .catch((err) => {
    console.log('GET failed', err)
  })
}

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
        {/* <Route> */}
          <Submit />
        {/* </Route> */}
      {/* </Router> */}
    </div>
    
  );
}

export default App;
