import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value"> {{value}} </button>
    <button *ngIf="value == 'X'" style="background-color:teal;"> {{value}} </button>
    <button *ngIf="value == 'O'" style="background-color:aquamarine;"> {{value}} </button>
  `,
  styles: [`button{
    height: 100%;
    width: 100%;
    font-weight: bold;
    font-size: 200%;
  }`]
})
export class SquareComponent {

  constructor() { }

  @Input() value: 'X' | 'O';

}
