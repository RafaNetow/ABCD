import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/Menu'
import General from './components/StudentInformation/General'
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
class App extends React.Component {
  render() {
  return (
    <div className="App">
   <ButtonAppBar/>
   <BrowserRouter>
   <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/studentinformation/general" component={General} />
        <Route component={PageNotFound} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
