import { TestBed, inject } from '@angular/core/testing';

import { Service715Service } from './service-715.service';

describe('Service715Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service715Service]
    });
  });

  it('should ...', inject([Service715Service], (service: Service715Service) => {
    expect(service).toBeTruthy();
  }));
});
