import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthHeaderComponent } from './Auth/auth-header/auth-header.component';
import { AuthFooterComponent } from './Auth/auth-footer/auth-footer.component';
import { AuthMenuComponent } from './Auth/auth-menu/auth-menu.component';
import { AuthLayoutComponent } from './Auth/auth-layout/auth-layout.component';
import { AuthLoginComponent } from './Auth/auth-login/auth-login.component';
import { DashboardComponent } from './UserModule/JE/dashboard/dashboard.component';
import { HeaderComponent } from './UserModule/JE/Layout/header/header.component';
import { JeFooterComponent } from './UserModule/JE/Layout/je-footer/je-footer.component';
import { JeLayoutComponent } from './UserModule/JE/Layout/je-layout/je-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    AuthMenuComponent,
    AuthLayoutComponent,
    AuthLoginComponent,
    DashboardComponent,
    HeaderComponent,
    JeFooterComponent,
    JeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
