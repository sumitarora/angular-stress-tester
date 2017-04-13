import { TestBed, inject } from '@angular/core/testing';

import { Service723Service } from './service-723.service';

describe('Service723Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service723Service]
    });
  });

  it('should ...', inject([Service723Service], (service: Service723Service) => {
    expect(service).toBeTruthy();
  }));
});
