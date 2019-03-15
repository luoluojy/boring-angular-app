import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from '../custom-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CenterComponent } from './center/center.component';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [CenterComponent, AdminComponent, ManageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CustomMaterialModule
  ]
})
export class AdminModule { }
