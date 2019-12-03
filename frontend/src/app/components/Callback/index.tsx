import * as React from 'react';
import { Component } from 'react';
import { AuthService } from 'app/services/auth';
import { RouteComponentProps } from 'react-router';
import ReactLoading from 'react-loading';

export namespace Callback {
  export interface Props extends RouteComponentProps<void> {
    authService: AuthService;
  }
}

const containerStyle: React.CSSProperties = {
  width: '99vw',
  height: '95vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export class Callback extends Component<Callback.Props> {
  componentDidMount() {
    if (!this.props.authService.isAuthenticated()) {
      this.props.authService.handleAuthentication();
    } else {
      this.props.history.replace('/employees');
    }
  }

  render() {
    return (
      <div style={containerStyle}>
        <ReactLoading width={'5%'} height={'5%'} type='spin' color='#FF9051' />
      </div>
    );
  }
}
