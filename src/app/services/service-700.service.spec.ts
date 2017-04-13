import { TestBed, inject } from '@angular/core/testing';

import { Service700Service } from './service-700.service';

describe('Service700Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service700Service]
    });
  });

  it('should ...', inject([Service700Service], (service: Service700Service) => {
    expect(service).toBeTruthy();
  }));
});
