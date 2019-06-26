import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { authConfig } from 'src/auth.config';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-azure-oauth';
  private basehref = '/';

  constructor(private oauthService: OAuthService, private router: Router, private location: Location) {
    this.basehref = location.prepareExternalUrl('');
    // this.configureOAuthService();
  }

  private async configureOAuthService() {
    if (authConfig.redirectUri) {
      authConfig.redirectUri = Location.stripTrailingSlash(
        Location.joinWithSlash(authConfig.redirectUri, this.basehref)
      );
    }
    console.log('OAUTH redirect uri ', authConfig.redirectUri);

    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();

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
            console.log('OAUTH: No recirection requested.', url);
          }
        }
      }
    });

    await this.oauthService.loadDiscoveryDocument();
    await this.oauthService.tryLogin();

    if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
      console.log('OAUTH: NO token found.');
      this.oauthService.initImplicitFlow(this.location.path());
    } else {
      console.log('OAUTH: Valid token present.');
    }
  }

}
