import { TestBed, inject } from '@angular/core/testing';

import { Service84Service } from './service-84.service';

describe('Service84Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service84Service]
    });
  });

  it('should ...', inject([Service84Service], (service: Service84Service) => {
    expect(service).toBeTruthy();
  }));
});
