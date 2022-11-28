import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbTooltipModule, NgbDropdownModule, NgbAccordionModule, NgbProgressbarModule, NgbNavModule, NgbPaginationModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// Feather Icon
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

// Emoji Picker
import { PickerModule } from '@ctrl/ngx-emoji-mart';

// Load Icon
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// Calendar package

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';
// Simplebar
// Ck Editer
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// Counter
import { CountToModule } from 'angular-count-to';
// Apex Chart Package
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

//  Drag and drop
// Select Droup down
import { NgSelectModule } from '@ng-select/ng-select';

// NG2 Search Filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// drag and droup row table
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

// Component Pages
import { AppsRoutingModule } from "./apps-routing.module";
import { SharedModule } from "../../shared/shared.module";
import {DatePipe} from '@angular/common';

import { SortByPipe } from '../apps/sort-by.pipe';

@NgModule({
  declarations: [SortByPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbProgressbarModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbCollapseModule,
    FeatherModule.pick(allIcons),
    FlatpickrModule.forRoot(),
    CKEditorModule,
    CountToModule,
    LeafletModule,
    AppsRoutingModule,
    SharedModule,
    PickerModule,
    NgSelectModule,
    DragDropModule,
    MatTableModule,
    FlexLayoutModule,
    Ng2SearchPipeModule,
  ],
  providers: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppsModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}
