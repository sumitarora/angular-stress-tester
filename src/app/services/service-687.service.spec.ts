import { TestBed, inject } from '@angular/core/testing';

import { Service687Service } from './service-687.service';

describe('Service687Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service687Service]
    });
  });

  it('should ...', inject([Service687Service], (service: Service687Service) => {
    expect(service).toBeTruthy();
  }));
});
