import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NotFoundComponent, LayoutComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class EssentialModule { }
