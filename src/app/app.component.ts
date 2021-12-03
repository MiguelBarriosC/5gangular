import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cheked = false;
  btnDis = true;
  persona = '';

  checkbox(event) {
    const checked = event.target.checked;
    this.cheked = checked;
    if (checked) {
      this.btnDis = false;
    } else {
      this.btnDis = true;
    }
  }
  juridica() {
    this.persona = 'juridica';
  }
  natural() {
    this.persona = 'natural';
  }
  volver() {
    this.persona = '';
  }
}
