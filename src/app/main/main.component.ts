import { Component } from '@angular/core';
import { BelowFoldComponent } from '../below-fold/below-fold.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BelowFoldComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
