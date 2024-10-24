import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasePageRoutingModule } from './clase-routing.module';

import { ClasePage } from './clase.page';
import { ShaderModule } from "../../shader/shader.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasePageRoutingModule,
    ShaderModule
],
  declarations: [ClasePage]
})
export class ClasePageModule {}
