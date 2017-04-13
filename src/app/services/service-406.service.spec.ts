import { TestBed, inject } from '@angular/core/testing';

import { Service406Service } from './service-406.service';

describe('Service406Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service406Service]
    });
  });

  it('should ...', inject([Service406Service], (service: Service406Service) => {
    expect(service).toBeTruthy();
  }));
});
