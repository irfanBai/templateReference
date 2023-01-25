import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  sayHello(inputEl: HTMLInputElement) {
    alert('Hello '+ inputEl.value);
  }
}
