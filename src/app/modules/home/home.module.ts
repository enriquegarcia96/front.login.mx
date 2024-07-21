import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeScreenComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule{}
