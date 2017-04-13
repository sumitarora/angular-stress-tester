import { TestBed, inject } from '@angular/core/testing';

import { Service911Service } from './service-911.service';

describe('Service911Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service911Service]
    });
  });

  it('should ...', inject([Service911Service], (service: Service911Service) => {
    expect(service).toBeTruthy();
  }));
});
