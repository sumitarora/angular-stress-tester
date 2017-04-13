import { TestBed, inject } from '@angular/core/testing';

import { Service679Service } from './service-679.service';

describe('Service679Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service679Service]
    });
  });

  it('should ...', inject([Service679Service], (service: Service679Service) => {
    expect(service).toBeTruthy();
  }));
});
