import { TestBed, inject } from '@angular/core/testing';

import { Service972Service } from './service-972.service';

describe('Service972Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service972Service]
    });
  });

  it('should ...', inject([Service972Service], (service: Service972Service) => {
    expect(service).toBeTruthy();
  }));
});
