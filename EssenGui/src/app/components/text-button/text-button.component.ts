import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.css']
})
export class TextButtonComponent {
  @Input() text: string = 'Click';
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick(){
    this.buttonClicked.emit();
  }
}
