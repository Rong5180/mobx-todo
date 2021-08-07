import React from "react";
import { Provider } from 'mobx-react'
import store from "./store";
import Home from "./pages/home";
import Detail from "./pages/detail";
import {HashRouter as Router,Route,Switch} from 'react-router-dom'


function App() {
  // @babel/plugin-proposal-class-properties
  return (
    <div >
      <Provider store={store} >
        <Router>
          <Switch>
            <Route exact path='/'component={Home} ></Route>
            <Route exact path='/detail' component={Detail} ></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
