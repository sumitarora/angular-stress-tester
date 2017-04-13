import { TestBed, inject } from '@angular/core/testing';

import { Service218Service } from './service-218.service';

describe('Service218Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service218Service]
    });
  });

  it('should ...', inject([Service218Service], (service: Service218Service) => {
    expect(service).toBeTruthy();
  }));
});
