import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Feather Icon
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CountToModule } from 'angular-count-to';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbDropdownModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { FlatpickrModule } from "angularx-flatpickr";

//Module
import { DashboardsRoutingModule } from "./dashboards-routing.module";
import { SharedModule } from "../../shared/shared.module";

// Component

import { ArchwizardModule } from "angular-archwizard";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    CountToModule,
    LeafletModule,
    NgbDropdownModule,
    NgbNavModule,
    FlatpickrModule.forRoot(),
    DashboardsRoutingModule,
    SharedModule,
    ArchwizardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardsModule {}
