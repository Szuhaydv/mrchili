import { Component } from '@angular/core';
import SpiceLevel from './spiceLevel';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  showSpiceLevel = false
  spiceLevels = [
    new SpiceLevel(0),
    new SpiceLevel(1),
    new SpiceLevel(2),
    new SpiceLevel(3),
  ]

  productList = [1,1,1,1]

  toggleSpiceLevel() {
    this.showSpiceLevel = !this.showSpiceLevel

  }

  selectSpiceLevel(id: number, event: Event) {
    event.stopPropagation()
    this.spiceLevels[id].isChecked = !this.spiceLevels[id].isChecked
  }

  nothing(event: Event) {
    event.stopPropagation()
  }
}
