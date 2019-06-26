import { Component } from '@angular/core';
import { OAuthService, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  constructor(private oauthService: OAuthService, private router: Router, private location: Location) {
  }

  public login() {
      this.oauthService.initImplicitFlow();
  }

  public logoff() {
      this.oauthService.logOut();
  }

  public get name() {
      const claims = this.oauthService.getIdentityClaims();
      console.log('claims ==>', claims);

      this.oauthService.events.subscribe(e => {
        if (e instanceof OAuthSuccessEvent) {
          if (e.type === 'token_received') {
            console.log('OAUTH: token_received.');
            const url = this.oauthService.state;
            if (url && url.length && url.length > 0) {
              console.log('OAUTH: Redirecting to ', url);
              // We need to wait until first page loaded until we can navigate
              setTimeout(() => this.router.navigate([url]), 100);
            } else {
              console.log('OAUTH: No redirection requested.', url);
            }
          }
        }
      });

      if (!claims) { return null };
      return claims;
      // return claims.given_name;
  }

}
