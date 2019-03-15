import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatNativeDateModule, MatPaginatorModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    CdkTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSortModule,
    CdkTreeModule,
    MatTreeModule,
    MatDividerModule
  ],
  exports: [
    CdkTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSortModule,
    CdkTreeModule,
    MatTreeModule,
    MatDividerModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
