import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandLogisticsDetailsComponent } from './land-logistics-details.component';

describe('LandLogisticsDetailsComponent', () => {
  let component: LandLogisticsDetailsComponent;
  let fixture: ComponentFixture<LandLogisticsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandLogisticsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandLogisticsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
