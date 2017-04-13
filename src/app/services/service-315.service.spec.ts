import { TestBed, inject } from '@angular/core/testing';

import { Service315Service } from './service-315.service';

describe('Service315Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service315Service]
    });
  });

  it('should ...', inject([Service315Service], (service: Service315Service) => {
    expect(service).toBeTruthy();
  }));
});
