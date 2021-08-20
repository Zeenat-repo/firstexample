import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<input[(ngModel)]="name" >
  <p> Hello {{name}}!</p>`,
 
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
