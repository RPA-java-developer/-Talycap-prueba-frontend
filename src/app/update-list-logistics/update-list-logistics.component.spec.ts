import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListLogisticsComponent } from './update-list-logistics.component';

describe('UpdateListLogisticsComponent', () => {
  let component: UpdateListLogisticsComponent;
  let fixture: ComponentFixture<UpdateListLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateListLogisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateListLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
