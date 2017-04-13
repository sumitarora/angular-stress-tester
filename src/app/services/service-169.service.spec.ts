import { TestBed, inject } from '@angular/core/testing';

import { Service169Service } from './service-169.service';

describe('Service169Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service169Service]
    });
  });

  it('should ...', inject([Service169Service], (service: Service169Service) => {
    expect(service).toBeTruthy();
  }));
});
