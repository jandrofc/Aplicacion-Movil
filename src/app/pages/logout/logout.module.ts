import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoutPageRoutingModule } from './logout-routing.module';

import { LogoutPage } from './logout.page';
import { ShaderModule } from "../../shader/shader.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoutPageRoutingModule,
    ShaderModule
],
  declarations: [LogoutPage]
})
export class LogoutPageModule {}
