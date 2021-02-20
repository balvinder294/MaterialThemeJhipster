import { NgModule } from '@angular/core';
import { MaterialThemeCheckSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [MaterialThemeCheckSharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [LoginModalComponent],
  exports: [
    MaterialThemeCheckSharedLibsModule,
    AlertComponent,
    AlertErrorComponent,
    LoginModalComponent,
    HasAnyAuthorityDirective,
    MDBBootstrapModule,
  ],
})
export class MaterialThemeCheckSharedModule {}
