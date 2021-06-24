import { Component } from "@angular/core";

@Component({
    selector: 'app-voiture',
    templateUrl: './voiture.component.html',
    styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
    name: string = "BMW";
    status: boolean = true;
    name2: string = "CITROEN";
    status2: boolean = false;
}