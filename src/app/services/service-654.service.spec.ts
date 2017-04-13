import { TestBed, inject } from '@angular/core/testing';

import { Service654Service } from './service-654.service';

describe('Service654Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service654Service]
    });
  });

  it('should ...', inject([Service654Service], (service: Service654Service) => {
    expect(service).toBeTruthy();
  }));
});
