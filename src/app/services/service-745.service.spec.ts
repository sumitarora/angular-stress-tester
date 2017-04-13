import { TestBed, inject } from '@angular/core/testing';

import { Service745Service } from './service-745.service';

describe('Service745Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service745Service]
    });
  });

  it('should ...', inject([Service745Service], (service: Service745Service) => {
    expect(service).toBeTruthy();
  }));
});
