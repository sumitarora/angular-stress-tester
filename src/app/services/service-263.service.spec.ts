import { TestBed, inject } from '@angular/core/testing';

import { Service263Service } from './service-263.service';

describe('Service263Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service263Service]
    });
  });

  it('should ...', inject([Service263Service], (service: Service263Service) => {
    expect(service).toBeTruthy();
  }));
});
