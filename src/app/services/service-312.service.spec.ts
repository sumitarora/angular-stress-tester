import { TestBed, inject } from '@angular/core/testing';

import { Service312Service } from './service-312.service';

describe('Service312Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service312Service]
    });
  });

  it('should ...', inject([Service312Service], (service: Service312Service) => {
    expect(service).toBeTruthy();
  }));
});
