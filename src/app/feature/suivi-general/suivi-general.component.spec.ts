import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviGeneralComponent } from './suivi-general.component';

describe('SuiviGeneralComponent', () => {
  let component: SuiviGeneralComponent;
  let fixture: ComponentFixture<SuiviGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
