import './vendor.ts';

import { NgModule, Injector, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { MaterialThemeCheckSharedModule, UserRouteAccessService } from './shared';
import { MaterialThemeCheckAppRoutingModule} from './app-routing.module';
import { MaterialThemeCheckHomeModule } from './home/home.module';
import { MaterialThemeCheckAdminModule } from './admin/admin.module';
import { MaterialThemeCheckAccountModule } from './account/account.module';
import { MaterialThemeCheckEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        MaterialThemeCheckAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        MaterialThemeCheckSharedModule,
        MaterialThemeCheckHomeModule,
        MaterialThemeCheckAdminModule,
        MaterialThemeCheckAccountModule,
        MaterialThemeCheckEntityModule,
        MDBBootstrapModule.forRoot(),
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class MaterialThemeCheckAppModule {}
