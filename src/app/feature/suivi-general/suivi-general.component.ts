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
    progressionBars: [
      {
        'title':'Initialisation du test technique',
         'progress':50,
         'color':''
      },
      {
        'title':'Avancement de la phase de developpement',
         'progress':25,
         'color':''
      }
    ] 
  }


  add5Percent(event:any){
    this._state.progressionBars?.forEach( p => { if(p.progress) p.progress +=  (p.progress||0)*0.005; } );
  }

  add10Percent(event:any){
    this._state.progressionBars?.forEach( p => { if(p.progress) p.progress +=  (p.progress||0)*0.01; } );
  }

  reset(event:any){
    this._state.progressionBars?.forEach( p => { if(p.progress) p.progress =  0; } );
  }

}
