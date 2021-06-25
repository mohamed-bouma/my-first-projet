import { Component } from "@angular/core";

@Component({
    selector: 'app-voiture',
    templateUrl: './voiture.component.html',
    styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
    name: string = "BMW";
    status: boolean = true;
    textColor: string = this.status ? 'green' : 'red';
}