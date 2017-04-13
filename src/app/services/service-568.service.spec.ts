import { TestBed, inject } from '@angular/core/testing';

import { Service568Service } from './service-568.service';

describe('Service568Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service568Service]
    });
  });

  it('should ...', inject([Service568Service], (service: Service568Service) => {
    expect(service).toBeTruthy();
  }));
});
