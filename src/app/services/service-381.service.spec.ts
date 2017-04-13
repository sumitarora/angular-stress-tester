import { TestBed, inject } from '@angular/core/testing';

import { Service381Service } from './service-381.service';

describe('Service381Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service381Service]
    });
  });

  it('should ...', inject([Service381Service], (service: Service381Service) => {
    expect(service).toBeTruthy();
  }));
});
