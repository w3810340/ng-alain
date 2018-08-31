import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PushRoutingModule } from './push-routing.module';
import { PushListComponent } from './list/list.component';

const COMPONENTS = [
  PushListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    PushRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class PushModule { }
