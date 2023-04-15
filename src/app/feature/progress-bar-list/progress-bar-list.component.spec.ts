import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarListComponent } from './progress-bar-list.component';

describe('ProgressBarListComponent', () => {
  let component: ProgressBarListComponent;
  let fixture: ComponentFixture<ProgressBarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
