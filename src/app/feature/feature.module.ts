import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SuiviGeneralComponent } from './suivi-general/suivi-general.component';
import { ProgressBarListComponent } from './progress-bar-list/progress-bar-list.component';
import { ProgressBarItemComponent } from './progress-bar-item/progress-bar-item.component';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');






@NgModule({
  declarations: [
    SuiviGeneralComponent,
    ProgressBarListComponent,
    ProgressBarItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SuiviGeneralComponent,
    ProgressBarListComponent,
    ProgressBarItemComponent
  ],
  providers:[
    {provide: LOCALE_ID, useValue: 'fr' }
  ]
})
export class FeatureModule { }
