import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './essential/not-found/not-found.component';
import { LayoutComponent } from './essential/layout/layout.component';
import { PasswordFlowLoginComponent } from './password-flow-login/password-flow-login.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: []
    },
    {
        path: 'password-flow-login',
        component: PasswordFlowLoginComponent,
        children: []
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
