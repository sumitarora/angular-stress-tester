import { TestBed, inject } from '@angular/core/testing';

import { Service894Service } from './service-894.service';

describe('Service894Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service894Service]
    });
  });

  it('should ...', inject([Service894Service], (service: Service894Service) => {
    expect(service).toBeTruthy();
  }));
});
