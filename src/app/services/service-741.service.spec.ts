import { TestBed, inject } from '@angular/core/testing';

import { Service741Service } from './service-741.service';

describe('Service741Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service741Service]
    });
  });

  it('should ...', inject([Service741Service], (service: Service741Service) => {
    expect(service).toBeTruthy();
  }));
});
