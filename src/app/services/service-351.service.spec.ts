import { TestBed, inject } from '@angular/core/testing';

import { Service351Service } from './service-351.service';

describe('Service351Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service351Service]
    });
  });

  it('should ...', inject([Service351Service], (service: Service351Service) => {
    expect(service).toBeTruthy();
  }));
});
