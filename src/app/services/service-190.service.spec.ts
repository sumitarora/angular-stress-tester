import { TestBed, inject } from '@angular/core/testing';

import { Service190Service } from './service-190.service';

describe('Service190Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service190Service]
    });
  });

  it('should ...', inject([Service190Service], (service: Service190Service) => {
    expect(service).toBeTruthy();
  }));
});
