import { TestBed, inject } from '@angular/core/testing';

import { Service398Service } from './service-398.service';

describe('Service398Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service398Service]
    });
  });

  it('should ...', inject([Service398Service], (service: Service398Service) => {
    expect(service).toBeTruthy();
  }));
});
