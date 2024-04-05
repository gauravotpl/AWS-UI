import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './Auth/auth-layout/auth-layout.component';
import { AuthLoginComponent } from './Auth/auth-login/auth-login.component';

const routes: Routes = [
  {path:'',component:AuthLayoutComponent},
  {
    path:'ae-dashboard',
    loadChildren:()=>import('./UserModule/AE/ae-module/ae-module.module').then((m)=>m.AEModuleModule)
  },
  {
    path:'je-dashboard',
    loadChildren:()=>import('./UserModule/JE/je-module/je-module.module').then((m)=>m.JeModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
