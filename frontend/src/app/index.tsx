import React from 'react';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router';
import { hot } from 'react-hot-loader';
import './style.local.css';
import { AuthService } from './services/auth';
import App from './containers/App';
import { Error } from './components';
import { Callback } from './components/Callback';

export interface Props {
  authService: AuthService;
}

export interface State {
  showLoader: boolean;
}

export class Root extends React.Component<Props, State> {
  state = {
    showLoader: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ showLoader: false }), 1000);
  }
  render() {
    const { authService } = this.props;
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
              authService.logout();
              return null;
            }}
          />
          <Route
            exact
            path='/login'
            render={() => {
              authService.login();
              return null;
            }}
          />
          <Route
            path='/error'
            render={(props: RouteComponentProps<void>) => (
              <Error authService={authService} {...props} />
            )}
          />
          <Route
            render={(props: RouteComponentProps<void>) => {
              if (/access_token|id_token|error/.test(props.location.pathname)) {
                return <Callback authService={authService} {...props} />;
              } else {
                return <App authService={authService} {...props} />;
              }
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(Root);
