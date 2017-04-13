import { TestBed, inject } from '@angular/core/testing';

import { Service7Service } from './service-7.service';

describe('Service7Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service7Service]
    });
  });

  it('should ...', inject([Service7Service], (service: Service7Service) => {
    expect(service).toBeTruthy();
  }));
});
