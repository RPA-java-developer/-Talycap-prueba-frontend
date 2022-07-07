import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGroundLogisticsComponent } from './register-ground-logistics.component';

describe('RegisterGroundLogisticsComponent', () => {
  let component: RegisterGroundLogisticsComponent;
  let fixture: ComponentFixture<RegisterGroundLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterGroundLogisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGroundLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
