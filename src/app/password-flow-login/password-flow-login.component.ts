import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authPasswordFlowConfig } from '../auth-password-flow.config';

@Component({
  selector: 'app-password-flow-login',
  templateUrl: './password-flow-login.component.html',
  styleUrls: ['./password-flow-login.component.sass']
})
export class PasswordFlowLoginComponent implements OnInit {
  userName: string;
  password: string;
  loginFailed = false;
  userProfile: object;

  constructor(private oauthSerice: OAuthService) {
    // Tweak config for password flow
    // This is just needed b/c this demo uses both,
    // Implicit flow as well as password flow

    this.oauthSerice.configure(authPasswordFlowConfig);
    this.oauthSerice.loadDiscoveryDocument();
  }

  ngOnInit() { }

  loadUserProfile(): void {
    this.oauthSerice.loadUserProfile().then(up => (this.userProfile = up));
  }

  get access_token() {
    return this.oauthSerice.getAccessToken();
  }

  get access_token_expiration() {
    return this.oauthSerice.getAccessTokenExpiration();
  }

  get givenName() {
    const claims = this.oauthSerice.getIdentityClaims();
    if (!claims) { return null; }
    console.log('Claims1: ', claims);
    return claims['given_name'];
  }

  get familyName() {
    const claims = this.oauthSerice.getIdentityClaims();
    if (!claims) { return null; }
    console.log('Claims2: ', claims);
    return claims['family_name'];
  }

  loginWithPassword() {
    this.oauthSerice
      .fetchTokenUsingPasswordFlowAndLoadUserProfile(
        this.userName,
        this.password
      ).then(() => {
        console.log('Sucessfully logged in', this.loginFailed);
        this.loginFailed = false;
        this.loadUserProfile();
      })
      .catch(err => {
        console.log('error logging in', err);
        this.loginFailed = true;
      });
  }

  logout() {
    this.oauthSerice.logOut(true);
    this.userProfile = {};
  }
}
