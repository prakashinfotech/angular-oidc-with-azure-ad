import { NgModule } from '@angular/core';
import {NgbModule, NgbButtonsModule, NgbPanel} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [ NgbModule, NgbButtonsModule, NgbPanel ],
  exports: [ NgbModule, NgbButtonsModule, NgbPanel ]
})
export class BootstrapModule { }
