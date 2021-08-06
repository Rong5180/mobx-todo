import React from "react";
import { Provider } from 'mobx-react'
import store from "./store";
import Home from "./pages/home";

function App() {
  // @babel/plugin-proposal-class-properties
  return (
    <div >
      jojj
      <Provider store={store} >
        <Home/>
      </Provider>
    </div>
  );
}

export default App;
