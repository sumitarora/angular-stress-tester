import { TestBed, inject } from '@angular/core/testing';

import { Service534Service } from './service-534.service';

describe('Service534Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service534Service]
    });
  });

  it('should ...', inject([Service534Service], (service: Service534Service) => {
    expect(service).toBeTruthy();
  }));
});
