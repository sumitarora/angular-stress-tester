import { TestBed, inject } from '@angular/core/testing';

import { Service753Service } from './service-753.service';

describe('Service753Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service753Service]
    });
  });

  it('should ...', inject([Service753Service], (service: Service753Service) => {
    expect(service).toBeTruthy();
  }));
});
