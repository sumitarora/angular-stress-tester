import { TestBed, inject } from '@angular/core/testing';

import { Service702Service } from './service-702.service';

describe('Service702Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service702Service]
    });
  });

  it('should ...', inject([Service702Service], (service: Service702Service) => {
    expect(service).toBeTruthy();
  }));
});
