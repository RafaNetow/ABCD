import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore } from 'app/store';
import Root from './app';
import history from './browserHistory';
import { AuthService } from 'app/services/auth';

// prepare store
const store = configureStore(history);
const authService = new AuthService();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root authService={authService} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
