import { NgModule } from '@angular/core';
import { MatToolbarModule,
         MatButtonModule, 
         MatSidenavModule, 
         MatIconModule, 
         MatListModule, 
         MatTableModule, 
         MatPaginatorModule,
         MatTooltipModule,
         MatCardModule,
         MatInputModule,
         MatFormFieldModule,
         MatMenuModule,
         MatDividerModule,
         MatSelectModule,
         MatRadioModule,
         MatCheckboxModule } from '@angular/material';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [],
  imports: [
        NgxMaterialTimepickerModule,
        MatToolbarModule,
        MatButtonModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatListModule, 
        MatTableModule, 
        MatPaginatorModule,
        MatTooltipModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatMenuModule,
        MatDividerModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule
  ],
  exports: [
        NgxMaterialTimepickerModule,
        MatToolbarModule,
        MatButtonModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatListModule, 
        MatTableModule, 
        MatPaginatorModule,
        MatTooltipModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatMenuModule,
        MatDividerModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule
  ]
})
export class MaterialModule { }
