import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyCardList from '../my-card-list/myCardList.js';
import Home from '../Home/Home.js';


const RouterComponent = (props) => {
     return(
       <Router>
         <div>
          <Route exact path="/" component={Home}/>
          <Route path="/mycardlist" component={MyCardList}/>
         </div>
       </Router>
     )
   }

   export default RouterComponent;