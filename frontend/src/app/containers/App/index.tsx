import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Navbar } from 'app/components/Navbar';

import AddFicha from 'app/containers/Ficha/components/AddFicha'

import 'react-toastify/dist/ReactToastify.css';
import '../../style.local.css';

import { ToastContainer } from 'react-toastify';


export namespace App {
  export interface Props extends RouteComponentProps<void> {
  
  }
}

class App extends Component<App.Props> {
  constructor(props: App.Props) {
    super(props);
  }

  render() {
    

    return (
      <div>
        <Navbar  history={this.props.history} />
        <Switch>
          <Route exact path='/ficha' component={AddFicha} />
          <Route exact path='/employees' component={AddFicha} />
          <Route render={() => <Redirect to='/error' />} />
        </Switch>
        <ToastContainer
    
          hideProgressBar={true}
        />
      </div>
    );
  }
}

export default connect()(App);
