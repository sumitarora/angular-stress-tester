import { TestBed, inject } from '@angular/core/testing';

import { Service886Service } from './service-886.service';

describe('Service886Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service886Service]
    });
  });

  it('should ...', inject([Service886Service], (service: Service886Service) => {
    expect(service).toBeTruthy();
  }));
});
