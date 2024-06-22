import { Component } from '@angular/core';
import SpiceLevel from './spiceLevel';
import { ProductType } from './spiceLevel';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  showSpiceLevel = false
  showProductTypes = false
  spiceLevels = [
    new SpiceLevel(0),
    new SpiceLevel(1),
    new SpiceLevel(2),
    new SpiceLevel(3),
  ]

  productTypes = [
    new ProductType(0, "Szószok"),
    new ProductType(1, "Őrlemények"),
    new ProductType(2, "Paprikák"),
  ]

  productList = [1,1,1,1]

  toggleSpiceLevel() {
    this.showSpiceLevel = !this.showSpiceLevel
  }

  toggleProductTypes() {
    this.showProductTypes = !this.showProductTypes
  }

  selectSpiceLevel(id: number, event: Event) {
    event.stopPropagation()
    this.spiceLevels[id].isChecked = !this.spiceLevels[id].isChecked
  }

  selectProductType(id: number, event: Event) {
    event.stopPropagation()
    this.productTypes[id].isChecked = !this.productTypes[id].isChecked
  }

  nothing(event: Event) {
    event.stopPropagation()
  }
}
