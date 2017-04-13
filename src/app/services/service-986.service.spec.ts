import { TestBed, inject } from '@angular/core/testing';

import { Service986Service } from './service-986.service';

describe('Service986Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service986Service]
    });
  });

  it('should ...', inject([Service986Service], (service: Service986Service) => {
    expect(service).toBeTruthy();
  }));
});
