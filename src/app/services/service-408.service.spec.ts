import { TestBed, inject } from '@angular/core/testing';

import { Service408Service } from './service-408.service';

describe('Service408Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service408Service]
    });
  });

  it('should ...', inject([Service408Service], (service: Service408Service) => {
    expect(service).toBeTruthy();
  }));
});
