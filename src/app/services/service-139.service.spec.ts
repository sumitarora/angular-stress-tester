import { TestBed, inject } from '@angular/core/testing';

import { Service139Service } from './service-139.service';

describe('Service139Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service139Service]
    });
  });

  it('should ...', inject([Service139Service], (service: Service139Service) => {
    expect(service).toBeTruthy();
  }));
});
