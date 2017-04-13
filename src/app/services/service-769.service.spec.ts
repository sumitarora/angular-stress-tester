import { TestBed, inject } from '@angular/core/testing';

import { Service769Service } from './service-769.service';

describe('Service769Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service769Service]
    });
  });

  it('should ...', inject([Service769Service], (service: Service769Service) => {
    expect(service).toBeTruthy();
  }));
});
