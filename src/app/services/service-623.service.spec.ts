import { TestBed, inject } from '@angular/core/testing';

import { Service623Service } from './service-623.service';

describe('Service623Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service623Service]
    });
  });

  it('should ...', inject([Service623Service], (service: Service623Service) => {
    expect(service).toBeTruthy();
  }));
});
