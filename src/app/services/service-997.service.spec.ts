import { TestBed, inject } from '@angular/core/testing';

import { Service997Service } from './service-997.service';

describe('Service997Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service997Service]
    });
  });

  it('should ...', inject([Service997Service], (service: Service997Service) => {
    expect(service).toBeTruthy();
  }));
});
