import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const myCardList = () => {
  return (
<h1>This is my pokemon list!</h1>
  )
}

const MyCardList = (props) => {
  return(
    <Router>
      <Route path="/mycardlist" component={myCardList}/>
    </Router>
  )
}

export default MyCardList;