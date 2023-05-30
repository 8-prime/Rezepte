import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick(){
    this.buttonClicked.emit();
  }
}
