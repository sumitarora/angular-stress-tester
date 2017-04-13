import { TestBed, inject } from '@angular/core/testing';

import { Service418Service } from './service-418.service';

describe('Service418Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service418Service]
    });
  });

  it('should ...', inject([Service418Service], (service: Service418Service) => {
    expect(service).toBeTruthy();
  }));
});
