import { TestBed, inject } from '@angular/core/testing';

import { Service677Service } from './service-677.service';

describe('Service677Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service677Service]
    });
  });

  it('should ...', inject([Service677Service], (service: Service677Service) => {
    expect(service).toBeTruthy();
  }));
});
