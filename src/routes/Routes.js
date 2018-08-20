import React from 'react';
import { Switch, Route } from "react-router-dom";
import MyCardList from '../components/MyCardListPage';
import Home from '../components/HomePage';

const Routes = (props) => {
     return(
       <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/mycardlist" component={MyCardList}/>
        </Switch>
       </main>
     )
   }

export default Routes;