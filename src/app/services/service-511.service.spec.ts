import { TestBed, inject } from '@angular/core/testing';

import { Service511Service } from './service-511.service';

describe('Service511Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service511Service]
    });
  });

  it('should ...', inject([Service511Service], (service: Service511Service) => {
    expect(service).toBeTruthy();
  }));
});
