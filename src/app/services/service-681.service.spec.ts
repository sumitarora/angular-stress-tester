import { TestBed, inject } from '@angular/core/testing';

import { Service681Service } from './service-681.service';

describe('Service681Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service681Service]
    });
  });

  it('should ...', inject([Service681Service], (service: Service681Service) => {
    expect(service).toBeTruthy();
  }));
});
