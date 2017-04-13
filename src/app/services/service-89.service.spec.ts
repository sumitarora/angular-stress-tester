import { TestBed, inject } from '@angular/core/testing';

import { Service89Service } from './service-89.service';

describe('Service89Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service89Service]
    });
  });

  it('should ...', inject([Service89Service], (service: Service89Service) => {
    expect(service).toBeTruthy();
  }));
});
