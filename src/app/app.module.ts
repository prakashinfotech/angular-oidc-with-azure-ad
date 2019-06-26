import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EssentialModule } from './essential/essential.module';
import { HomeModule } from './home/home.module';
import { MaterialModule } from './material/material.module';
import { PasswordFlowLoginComponent } from './password-flow-login/password-flow-login.component';
import { FormsModule } from '@angular/forms';
// import { BootstrapModule } from './bootstrap/bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    PasswordFlowLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    EssentialModule,
    HomeModule,
    MaterialModule,
    // BootstrapModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
