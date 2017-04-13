import { TestBed, inject } from '@angular/core/testing';

import { Service933Service } from './service-933.service';

describe('Service933Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service933Service]
    });
  });

  it('should ...', inject([Service933Service], (service: Service933Service) => {
    expect(service).toBeTruthy();
  }));
});
