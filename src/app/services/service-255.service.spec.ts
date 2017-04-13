import { TestBed, inject } from '@angular/core/testing';

import { Service255Service } from './service-255.service';

describe('Service255Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service255Service]
    });
  });

  it('should ...', inject([Service255Service], (service: Service255Service) => {
    expect(service).toBeTruthy();
  }));
});
