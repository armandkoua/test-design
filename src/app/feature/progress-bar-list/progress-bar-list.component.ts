import { Component, Input } from '@angular/core';
import { ProgressionState } from 'src/app/models/progression-state';

@Component({
  selector: 'app-progress-bar-list',
  templateUrl: './progress-bar-list.component.html',
  styleUrls: ['./progress-bar-list.component.css']
})
export class ProgressBarListComponent {

  @Input() progressionBars: ProgressionState[] | undefined;

}
