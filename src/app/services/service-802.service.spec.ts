import { TestBed, inject } from '@angular/core/testing';

import { Service802Service } from './service-802.service';

describe('Service802Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service802Service]
    });
  });

  it('should ...', inject([Service802Service], (service: Service802Service) => {
    expect(service).toBeTruthy();
  }));
});
