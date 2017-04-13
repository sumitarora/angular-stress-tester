import { TestBed, inject } from '@angular/core/testing';

import { Service590Service } from './service-590.service';

describe('Service590Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service590Service]
    });
  });

  it('should ...', inject([Service590Service], (service: Service590Service) => {
    expect(service).toBeTruthy();
  }));
});
