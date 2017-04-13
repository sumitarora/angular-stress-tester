import { TestBed, inject } from '@angular/core/testing';

import { Service514Service } from './service-514.service';

describe('Service514Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service514Service]
    });
  });

  it('should ...', inject([Service514Service], (service: Service514Service) => {
    expect(service).toBeTruthy();
  }));
});
