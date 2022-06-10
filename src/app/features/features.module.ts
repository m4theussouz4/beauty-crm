import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainContainerComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ComponentsModule,
  ],
  providers: [MainContainerComponent],
})
export class FeaturesModule {}
