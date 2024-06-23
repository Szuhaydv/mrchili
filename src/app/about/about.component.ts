import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  currentTextNo = 1
  currentText = [
    "Mr. Chili egy 2024-ben alapult... Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur. Amet sed sed est diam. Sapien vitae dolor ut sit pellentesque nunc at velit. Vitae semper nisl nunc ultrices elementum feugiat in magna."
  ]

  updateText(textNumber: number) {
    switch(textNumber) {
      case 0: 
        this.currentText = [
          "Mr. Chili ötlete 2018-ban született... Lorem ipsum dolor sit amet consectetur.",
          "Lorem ipsum dolor sit amet consectetur. Amet sed sed est diam. Sapien vitae dolor ut sit pellentesque nunc at velit. Vitae semper nisl nunc ultrices elementum feugiat in magna."
        ]
        this.currentTextNo = 0
        break
      case 1:
        this.currentText = [
          "Mr. Chili 2020-ban kezdett el kialakulni... Lorem ipsum dolor sit amet consectetur.",
          "Lorem ipsum dolor sit amet consectetur. Amet sed sed est diam. Sapien vitae dolor ut sit pellentesque nunc at velit. Vitae semper nisl nunc ultrices elementum feugiat in magna."
        ]
        this.currentTextNo = 1
        break
      case 2:
        this.currentText = [
          "Mr. Chili egy 2024-ben alapult... Lorem ipsum dolor sit amet consectetur.",
          "Lorem ipsum dolor sit amet consectetur. Amet sed sed est diam. Sapien vitae dolor ut sit pellentesque nunc at velit. Vitae semper nisl nunc ultrices elementum feugiat in magna."
        ]
        this.currentTextNo = 2
        break
      default:
        this.currentText = [
          "Mr. Chili 2020-ban kezdett el kialakulni... Lorem ipsum dolor sit amet consectetur.",
          "Lorem ipsum dolor sit amet consectetur. Amet sed sed est diam. Sapien vitae dolor ut sit pellentesque nunc at velit. Vitae semper nisl nunc ultrices elementum feugiat in magna."
        ]
        this.currentTextNo = 1
    }
  }
}
