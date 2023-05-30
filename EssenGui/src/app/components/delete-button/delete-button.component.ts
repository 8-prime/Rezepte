import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick(){
    this.buttonClicked.emit();
  }
}
