import { TestBed, inject } from '@angular/core/testing';

import { Service231Service } from './service-231.service';

describe('Service231Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service231Service]
    });
  });

  it('should ...', inject([Service231Service], (service: Service231Service) => {
    expect(service).toBeTruthy();
  }));
});
