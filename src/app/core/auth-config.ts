import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://identityexternal-qa.altsrc.net',
  clientId: 'local_test_pkce', // The "Auth Code + PKCE" client
  responseType: 'code',
  redirectUri: window.location.origin,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid profile getCciProfile',
  silentRefreshTimeout: 3000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
};
