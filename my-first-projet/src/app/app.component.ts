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
  lettre: string="";
  isAdded: boolean = false;
  voitures: Array<string> = ['bmw', 'opel', 'renault'];
  

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000)
  }

  afficherAlert() {
    this.isAdded = true;
  this.addText = "Une voiture a été ajoutée !";
  }

  afficherLettreSaisie(event: Event){
    //console.log((<HTMLInputElement>event.target).value);
    this.lettre = (<HTMLInputElement>event.target).value;
  }
}
