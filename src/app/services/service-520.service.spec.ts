import { TestBed, inject } from '@angular/core/testing';

import { Service520Service } from './service-520.service';

describe('Service520Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service520Service]
    });
  });

  it('should ...', inject([Service520Service], (service: Service520Service) => {
    expect(service).toBeTruthy();
  }));
});
