import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { JeLayoutComponent } from '../Layout/je-layout/je-layout.component';

const routes: Routes = [
  {path:'',component:JeLayoutComponent,
    children:[
      {path:'',component:DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JeModuleRoutingModule { }
