import { TestBed, inject } from '@angular/core/testing';

import { Service247Service } from './service-247.service';

describe('Service247Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service247Service]
    });
  });

  it('should ...', inject([Service247Service], (service: Service247Service) => {
    expect(service).toBeTruthy();
  }));
});
