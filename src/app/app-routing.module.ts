import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestDashboardComponent } from './rest-dashboard/rest-dashboard.component';

const routes: Routes = [
  { path: '', component: RestDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
