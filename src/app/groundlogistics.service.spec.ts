import { TestBed } from '@angular/core/testing';

import { GroundlogisticsService } from './groundlogistics.service';

describe('GroundlogisticsService', () => {
  let service: GroundlogisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroundlogisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
