import { TestBed, inject } from '@angular/core/testing';

import { Service956Service } from './service-956.service';

describe('Service956Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service956Service]
    });
  });

  it('should ...', inject([Service956Service], (service: Service956Service) => {
    expect(service).toBeTruthy();
  }));
});
