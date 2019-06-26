import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  // issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
  // issuer: 'https://login.microsoftonline.com/9f1a0fe2-b168-4228-b34b-85dc646fa753/v2.0',
  issuer: 'https://login.microsoftonline.com/9f1a0fe2-b168-4228-b34b-85dc646fa753/v2.0',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // URL of the SPA to redirect the user after silent refresh
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'dbbf0c88-bc64-4774-a996-52d9e1da6656',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  // scope: 'openid profile email voucher',

  strictDiscoveryDocumentValidation: false,

  showDebugInformation: true,

  sessionChecksEnabled: true
};

