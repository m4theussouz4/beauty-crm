import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';

const COMPONENTS = [
    SideBarComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
