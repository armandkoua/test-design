import { Component, Input } from '@angular/core';
import { ProgressionState } from 'src/app/models/progression-state';

@Component({
  selector: 'app-progress-bar-item',
  templateUrl: './progress-bar-item.component.html',
  styleUrls: ['./progress-bar-item.component.css']
})
export class ProgressBarItemComponent {
  @Input() progressionBar: ProgressionState | undefined;

  ngOnInit(){

  }

  calculateColor(val:number| undefined){
    let progress = val ? val:0;

      if (progress >= 0 && progress <= 25)
        return '#7160E8';
      else if (progress <= 50)
        return '#60E8B6';
      else if (progress <= 75)
        return '#60ADE8';
      else if (progress <= 100)
        return '#30DB63';  
      else 
      return ''; 
  }
}
