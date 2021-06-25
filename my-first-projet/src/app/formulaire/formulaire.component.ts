import { Component } from "@angular/core";

@Component({
    selector: 'app-formulaire',
    templateUrl: './formulaire.component.html',
    styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
    isAdded: boolean = false;
    addText: string = "Pas de voiture ajoutée";
    nomVoiture: string = "";
    lettre: string="";
    isDisabled: boolean = true;

    afficherAlert() {
        this.isAdded = true;
      this.addText = "Une voiture a été ajoutée !";
      }
      afficherLettreSaisie(event: Event){
        //console.log((<HTMLInputElement>event.target).value);
        this.lettre = (<HTMLInputElement>event.target).value;
      }
}