import { TestBed, inject } from '@angular/core/testing';

import { Service586Service } from './service-586.service';

describe('Service586Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service586Service]
    });
  });

  it('should ...', inject([Service586Service], (service: Service586Service) => {
    expect(service).toBeTruthy();
  }));
});
