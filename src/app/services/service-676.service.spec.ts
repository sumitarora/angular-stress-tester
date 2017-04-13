import { TestBed, inject } from '@angular/core/testing';

import { Service676Service } from './service-676.service';

describe('Service676Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service676Service]
    });
  });

  it('should ...', inject([Service676Service], (service: Service676Service) => {
    expect(service).toBeTruthy();
  }));
});
