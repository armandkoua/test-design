import { Component } from '@angular/core';
import { ApplicationState } from 'src/app/models/application-state';

@Component({
  selector: 'app-suivi-general',
  templateUrl: './suivi-general.component.html',
  styleUrls: ['./suivi-general.component.css']
})
export class SuiviGeneralComponent {

  _state: ApplicationState = {
    name:'Koua',
    lastName:'Armand',
    dateOfTest:new Date(),
    progressionBars: [] 
  }

}
