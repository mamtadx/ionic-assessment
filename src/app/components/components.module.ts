import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import {TextAvatarModule} from '../components/text-avatar/text-avatar.module'

@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent

  ],
  imports : [CommonModule, TextAvatarModule],
  declarations: [HeaderComponent, FooterComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ComponentsModule { }
