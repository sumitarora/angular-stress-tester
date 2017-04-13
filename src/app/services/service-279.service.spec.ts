import { TestBed, inject } from '@angular/core/testing';

import { Service279Service } from './service-279.service';

describe('Service279Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service279Service]
    });
  });

  it('should ...', inject([Service279Service], (service: Service279Service) => {
    expect(service).toBeTruthy();
  }));
});
