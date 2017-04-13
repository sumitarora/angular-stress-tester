import { TestBed, inject } from '@angular/core/testing';

import { Service130Service } from './service-130.service';

describe('Service130Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service130Service]
    });
  });

  it('should ...', inject([Service130Service], (service: Service130Service) => {
    expect(service).toBeTruthy();
  }));
});
