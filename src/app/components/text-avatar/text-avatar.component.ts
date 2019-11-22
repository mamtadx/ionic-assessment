import { Input, SimpleChanges, Component, ViewChild, OnInit } from '@angular/core';
import { ColorGenerator } from "./color-generator";

@Component({
  selector: 'text-avatar',
  template: '<div class="u-text-avatar" [ngStyle]="styles">{{ firstLetter }}</div>',
  styleUrls: ['./text-avatar.component.scss'],
})
export class TextAvatarComponent implements OnInit {
    @Input() text: string;
    @Input() color: string;
    @Input() textColor: string;

    public firstLetter = "";
    public styles = {
      'background-color': "#fff",
      'color': "#000"
    };
  constructor(private colorGenerator: ColorGenerator) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    let text = changes['text'] ? changes['text'].currentValue : null;
    let color = changes['color'] ? changes['color'].currentValue : null;
    let textColor = changes['textColor'] ? changes['textColor'].currentValue : this.styles.color;

    this.firstLetter = this.extractFirstCharacter(text).toUpperCase();

    this.styles = {...this.styles, 'background-color': this.backgroundColorHexString(color, text), 'color': textColor}
  }

  private extractFirstCharacter(text: string): string {
    return text.charAt(0) || '';
  }

  private backgroundColorHexString(color: string, text: string): string {
    return color || this.colorGenerator.getColor(text);
  }

}
