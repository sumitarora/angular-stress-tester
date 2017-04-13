import { TestBed, inject } from '@angular/core/testing';

import { Service173Service } from './service-173.service';

describe('Service173Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service173Service]
    });
  });

  it('should ...', inject([Service173Service], (service: Service173Service) => {
    expect(service).toBeTruthy();
  }));
});
