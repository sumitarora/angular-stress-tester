import { TestBed, inject } from '@angular/core/testing';

import { Service546Service } from './service-546.service';

describe('Service546Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service546Service]
    });
  });

  it('should ...', inject([Service546Service], (service: Service546Service) => {
    expect(service).toBeTruthy();
  }));
});
