import { TestBed, inject } from '@angular/core/testing';

import { Service53Service } from './service-53.service';

describe('Service53Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service53Service]
    });
  });

  it('should ...', inject([Service53Service], (service: Service53Service) => {
    expect(service).toBeTruthy();
  }));
});
