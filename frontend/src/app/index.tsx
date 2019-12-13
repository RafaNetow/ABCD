import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { hot } from 'react-hot-loader';
import './style.local.css';




export interface State {
  showLoader: boolean;
}

export class Root extends React.Component< State> {
  state = {
    showLoader: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ showLoader: false }), 1000);
  }
  render() {
    
    // const { showLoader } = this.state;

    return (
      <div>
        {/* <div style={containerStyle} className={showLoader ? "" : style.hidden}>
          <ReactLoading
            width={"5%"}
            height={"5%"}
            type="spin"
            color="#FF9051"
          />
        </div> */}
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/employees' />} />
          <Route
            exact
            path='/logout'
            render={() => {
             
              return null;
            }}
          />
          <Route
            exact
            path='/login'
            render={() => {
            
              return null;
            }}
          />
          <Route
            path='/error'
          
          />
          <Route
  
          />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(Root);
