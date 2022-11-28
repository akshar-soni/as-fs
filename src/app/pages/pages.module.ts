import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from "angular-count-to";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { LightboxModule } from "ngx-lightbox";
// Pages Routing
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { DashboardsModule } from "./dashboards/dashboards.module";
import { AppsModule } from "./apps/apps.module";
import { ArchwizardModule } from "angular-archwizard";
import { defineLordIconElement } from "lord-icon-element";
import lottie from "lottie-web";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    LeafletModule,
    NgbDropdownModule,
    PagesRoutingModule,
    SharedModule,
    LightboxModule,
    DashboardsModule,
    AppsModule,
    ArchwizardModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}
