import { TestBed, inject } from '@angular/core/testing';

import { Service616Service } from './service-616.service';

describe('Service616Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service616Service]
    });
  });

  it('should ...', inject([Service616Service], (service: Service616Service) => {
    expect(service).toBeTruthy();
  }));
});
