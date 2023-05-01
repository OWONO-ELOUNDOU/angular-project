import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { LinkComponent } from './link/link.component';
import { ProcedureComponent } from './procedures/procedure/procedure.component';
import { SalesComponent } from './sales/sales.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'procedure', component: ProcedureComponent },
      { path: 'document', component: DocumentComponent },
      { path: 'link', component: LinkComponent },
      { path: 'shop', component: SalesComponent },
    ])
  ],
  exports: [RouterModule]
})
export class FreeRoutingModule { }
