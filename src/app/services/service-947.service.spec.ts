import { TestBed, inject } from '@angular/core/testing';

import { Service947Service } from './service-947.service';

describe('Service947Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service947Service]
    });
  });

  it('should ...', inject([Service947Service], (service: Service947Service) => {
    expect(service).toBeTruthy();
  }));
});
