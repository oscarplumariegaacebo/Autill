import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errors',
  standalone: true,
  imports: [],
  templateUrl: './errors.component.html',
  styleUrl: './errors.component.css'
})
export class ErrorsComponent {

  @Input()
  errorMessage!: string
}
