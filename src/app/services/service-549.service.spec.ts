import { TestBed, inject } from '@angular/core/testing';

import { Service549Service } from './service-549.service';

describe('Service549Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service549Service]
    });
  });

  it('should ...', inject([Service549Service], (service: Service549Service) => {
    expect(service).toBeTruthy();
  }));
});
