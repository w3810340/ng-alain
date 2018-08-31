import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SysRoutingModule } from './sys-routing.module';
import { SysLogComponent } from './log/log.component';
import { SysLogViewComponent } from './log/view/view.component';

const COMPONENTS = [
  SysLogComponent];
const COMPONENTS_NOROUNT = [
  SysLogViewComponent];

@NgModule({
  imports: [
    SharedModule,
    SysRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class SysModule { }
