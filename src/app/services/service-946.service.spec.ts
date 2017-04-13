import { TestBed, inject } from '@angular/core/testing';

import { Service946Service } from './service-946.service';

describe('Service946Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service946Service]
    });
  });

  it('should ...', inject([Service946Service], (service: Service946Service) => {
    expect(service).toBeTruthy();
  }));
});
