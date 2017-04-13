import { TestBed, inject } from '@angular/core/testing';

import { Service259Service } from './service-259.service';

describe('Service259Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service259Service]
    });
  });

  it('should ...', inject([Service259Service], (service: Service259Service) => {
    expect(service).toBeTruthy();
  }));
});
