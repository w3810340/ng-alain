import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PushListComponent } from './list/list.component';

const routes: Routes = [

  { path: 'list', component: PushListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PushRoutingModule { }
