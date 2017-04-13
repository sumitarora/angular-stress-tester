import { TestBed, inject } from '@angular/core/testing';

import { Service210Service } from './service-210.service';

describe('Service210Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service210Service]
    });
  });

  it('should ...', inject([Service210Service], (service: Service210Service) => {
    expect(service).toBeTruthy();
  }));
});
