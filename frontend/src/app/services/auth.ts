import { WebAuth, Auth0DecodedHash } from 'auth0-js';
import { History } from 'history';
import browserHistory from '../../browserHistory';

export class AuthService {
  auth0: WebAuth;
  storageProvider: Storage;
  private readonly history: History;
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    if (!process.env.AUTH0_CLIENT_ID) {
      throw new Error('AUTH0_CLIENT_ID is missing in env variables');
    }
    if (!process.env.AUTH0_DOMAIN) {
      throw new Error('AUTH0_DOMAIN is missing in env variables');
    }
    this.auth0 = new WebAuth({
      clientID: process.env.AUTH0_CLIENT_ID,
      domain: process.env.AUTH0_DOMAIN,
      redirectUri: process.env.AUTH0_REDIRECT_URI,
      responseType: 'token id_token',
      scope: 'openid',
    });
    this.history = browserHistory;
    this.storageProvider = sessionStorage;
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    const callback: any = (err: any, authResult: Auth0DecodedHash) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.history.replace('/employees');
      } else if (err) {
        this.history.replace(`/error?message=${err.errorDescription}`);
        console.error(err);
      }
    };
    this.auth0.parseHash(callback);
  }

  setSession(authResult: Auth0DecodedHash) {
    if (
      !authResult.expiresIn ||
      !authResult.accessToken ||
      !authResult.idToken
    ) {
      return;
    }

    const expiresAt = JSON.stringify(authResult.idTokenPayload.exp * 1000);
    this.storageProvider.setItem('access_token', authResult.accessToken);
    this.storageProvider.setItem('id_token', authResult.idToken);
    this.storageProvider.setItem('expires_at', expiresAt);
  }

  logout() {
    this.storageProvider.removeItem('access_token');
    this.storageProvider.removeItem('id_token');
    this.storageProvider.removeItem('expires_at');
    this.auth0.logout({ returnTo: `${process.env.AUTH0_REDIRECT_URI}` });
  }

  isAuthenticated() {
    const expires_at = this.storageProvider.getItem('expires_at');
    if (!expires_at) {
      return false;
    }
    const expiresAt = JSON.parse(expires_at);
    return new Date().getTime() < expiresAt;
  }

  getIdToken() {
    return this.storageProvider.getItem('id_token');
  }
}
