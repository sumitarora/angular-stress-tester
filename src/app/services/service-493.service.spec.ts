import { TestBed, inject } from '@angular/core/testing';

import { Service493Service } from './service-493.service';

describe('Service493Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service493Service]
    });
  });

  it('should ...', inject([Service493Service], (service: Service493Service) => {
    expect(service).toBeTruthy();
  }));
});
