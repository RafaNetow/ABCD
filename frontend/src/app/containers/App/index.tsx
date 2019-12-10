import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Navbar } from 'app/components/Navbar';
import AddEmployee from 'app/containers/Employee/components/AddEmployee';
import EditEmployee from 'app/containers/Employee/components/EditEmployee';
import AddFicha from 'app/containers/Ficha/components/AddFicha'

import 'react-toastify/dist/ReactToastify.css';
import '../../style.local.css';

import { ToastContainer } from 'react-toastify';
import ViewEmployee from 'app/containers/Employee/components/ViewEmployee';

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
          <Route exact path='/employees/new' component={AddEmployee} />
          <Route path='/employees/:employeeId/edit' component={EditEmployee} />
          <Route path='/employees/:employeeId/view' component={ViewEmployee} />
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
