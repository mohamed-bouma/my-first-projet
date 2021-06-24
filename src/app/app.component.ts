import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Mohamed';
  isDisabled: boolean = true;
  addText: string = "Pas de voiture ajoutée";
  nomVoiture: string = "";

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000)
  }

  afficherAlert() {
    this.addText = "Une voiture a été ajoutée !";
  }
}
