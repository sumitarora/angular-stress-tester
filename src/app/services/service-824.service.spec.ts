import { TestBed, inject } from '@angular/core/testing';

import { Service824Service } from './service-824.service';

describe('Service824Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service824Service]
    });
  });

  it('should ...', inject([Service824Service], (service: Service824Service) => {
    expect(service).toBeTruthy();
  }));
});
