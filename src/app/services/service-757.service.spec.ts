import { TestBed, inject } from '@angular/core/testing';

import { Service757Service } from './service-757.service';

describe('Service757Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service757Service]
    });
  });

  it('should ...', inject([Service757Service], (service: Service757Service) => {
    expect(service).toBeTruthy();
  }));
});
