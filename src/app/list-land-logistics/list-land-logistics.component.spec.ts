import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLandLogisticsComponent } from './list-land-logistics.component';

describe('ListLandLogisticsComponent', () => {
  let component: ListLandLogisticsComponent;
  let fixture: ComponentFixture<ListLandLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLandLogisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLandLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
