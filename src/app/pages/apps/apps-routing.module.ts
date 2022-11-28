import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
