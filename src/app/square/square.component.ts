import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value"> {{value}} </button>
    <button *ngIf="value == 'X'" style="background-color:#75E6DA;"> {{value}} </button>
    <button *ngIf="value == 'O'" style="background-color:#189AB4;"> {{value}} </button>
  `,
  styles: [`button{
    height: 100%;
    width: 100%;
    font-weight: bold;
    font-size: 200%;
    border: 1px #05445E solid;
  }`]
})
export class SquareComponent {

  constructor() { }

  @Input() value: 'X' | 'O';

}
