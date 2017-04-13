import { TestBed, inject } from '@angular/core/testing';

import { Service728Service } from './service-728.service';

describe('Service728Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service728Service]
    });
  });

  it('should ...', inject([Service728Service], (service: Service728Service) => {
    expect(service).toBeTruthy();
  }));
});
