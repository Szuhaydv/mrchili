export default class SpiceLevel {
  id: number
  isChecked = false

  constructor(id: number) {
    this.id = id
  }
}

export class ProductType {
  id: number
  title: string
  isChecked = false

  constructor(id: number, title: string) {
    this.title = title
    this.id = id
  }
}