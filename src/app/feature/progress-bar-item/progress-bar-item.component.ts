import { Component, Input } from '@angular/core';
import { ProgressionState } from 'src/app/models/progression-state';

@Component({
  selector: 'app-progress-bar-item',
  templateUrl: './progress-bar-item.component.html',
  styleUrls: ['./progress-bar-item.component.css']
})
export class ProgressBarItemComponent {
  @Input() progressionBar: ProgressionState | undefined;
}
