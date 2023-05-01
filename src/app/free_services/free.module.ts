import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';
import { FreeRoutingModule } from './free-routing.module';
import { LinkComponent } from './link/link.component';
import { ProcedureComponent } from './procedures/procedure/procedure.component';
import { SalesComponent } from './sales/sales.component';



@NgModule({
  declarations: [
    DocumentComponent,
    LinkComponent,
    ProcedureComponent,
    SalesComponent
  ],
  imports: [
    FreeRoutingModule,
    CommonModule
  ]
})
export class FreeModule { }
