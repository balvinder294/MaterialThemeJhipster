import './vendor.ts';

import { NgModule } from '@angular/core';
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
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
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
