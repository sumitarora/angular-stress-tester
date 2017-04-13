import { TestBed, inject } from '@angular/core/testing';

import { Service486Service } from './service-486.service';

describe('Service486Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service486Service]
    });
  });

  it('should ...', inject([Service486Service], (service: Service486Service) => {
    expect(service).toBeTruthy();
  }));
});
