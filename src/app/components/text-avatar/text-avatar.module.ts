import { NgModule } from "@angular/core";
import { TextAvatarComponent } from './text-avatar.component';
import { CommonModule } from '@angular/common';
import { ColorGenerator } from './color-generator';

@NgModule({
  imports: [CommonModule],
  declarations: [TextAvatarComponent],
  exports: [TextAvatarComponent],
  providers: [ColorGenerator]
})
export class TextAvatarModule {}
