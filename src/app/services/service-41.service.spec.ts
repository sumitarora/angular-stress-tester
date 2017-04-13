import { TestBed, inject } from '@angular/core/testing';

import { Service41Service } from './service-41.service';

describe('Service41Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service41Service]
    });
  });

  it('should ...', inject([Service41Service], (service: Service41Service) => {
    expect(service).toBeTruthy();
  }));
});
