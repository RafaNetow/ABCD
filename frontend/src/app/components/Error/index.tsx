import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { AuthService } from '../../services';
// import style from './style.local.css';

export namespace Error {
  export interface Props extends RouteComponentProps<void> {
    authService: AuthService;
  }
}

const style = {
  flexContainer: {
    height: '100vh',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    width: '480px',
    border: '1px solid #E1E6F0',
    borderRadius: '10px',
    boxShadow: '0 0 20px #E1E6F0',
  },
  flexItem: {
    backgroundColor: '#fff',
    padding: '5px',
    fontSize: '23px',
    textAlign: 'center',
  },
  flexItemContent: {
    paddingTop: '25px',
    borderRadius: '0 0 10px 10px',
  },
  flexItemHeader: {
    backgroundColor: 'rgba(241,241,241,0.8)',
    color: 'black',
    padding: '35px',
  },
  buttonFlexItem: {
    border: 0,
    backgroundColor: 'rgb(38, 75, 150)',
    color: '#fff',
    display: 'block',
    boxSizing: 'border-box',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: 'auto',
    borderRadius: '4px',
    height: '60px',
    width: '320px',
    fontSize: '16px',
  },
  ButtonContainer: {
    paddingTop: '25px',
  },
  logo: {
    width: '75%',
  },
  bottomMessage: {
    padding: '25px 20px',
    fontSize: '18px',
  },
};

const headerStyle: React.CSSProperties = {
  backgroundColor: 'rgba(241,241,241,0.8)',
  fontSize: '23px',
  textAlign: 'center',
  color: 'black',
  padding: '35px',
};

const bodyStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  fontSize: '23px',
  textAlign: 'center',
  padding: '30px 20px 25px 20px',
  borderRadius: '0 0 10px 10px',
};

const buttonStyle: React.CSSProperties = {
  border: 0,
  backgroundColor: 'rgb(38, 75, 150)',
  color: '#fff',
  display: 'block',
  boxSizing: 'border-box',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  margin: 'auto',
  borderRadius: '6px',
  height: '80px',
  width: '95%',
  fontSize: '16px',
  cursor: 'pointer',
};

export const Error = (props: Error.Props) => {
  const message =
    new URLSearchParams(props.location.search).get('message') || '';
  const content = {
    title: 'Authentication Error',
    body: 'An unexpected error ocurred',
    end: '',
  };

  if (message === 'Please verify your email before logging in.') {
    content.title = message;
    content.body = `Check your inbox, we've sent you an email with the subject "Verify your email".`;
    content.end = `Verification link expires in 5 days so don't delay`;
  }

  return (
    <div style={style.flexContainer}>
      <div style={style.row}>
        <div style={headerStyle}>
          <img
            style={style.logo}
            src='https://s3.amazonaws.com/kiwihr-frontend-develop/logo-wp-colors.png'
            alt='Glee logo'
          />
        </div>
        <div style={bodyStyle}>
          <b>{content.title}</b>
          <br />
          <p>{content.body}</p>
          <div style={{ paddingTop: '25px' }}>
            <button
              onClick={() => props.authService.logout()}
              style={buttonStyle}
            >
              back to login
            </button>
          </div>
          <p style={{ padding: '25px 20px', fontSize: '16px' }}>
            {content.end}
            <br />
            For assistance:{' '}
            <a href='mailto:help@acklenavenue.com'>help@acklenavenue.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};
