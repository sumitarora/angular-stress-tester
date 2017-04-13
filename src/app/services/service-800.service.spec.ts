import { TestBed, inject } from '@angular/core/testing';

import { Service800Service } from './service-800.service';

describe('Service800Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service800Service]
    });
  });

  it('should ...', inject([Service800Service], (service: Service800Service) => {
    expect(service).toBeTruthy();
  }));
});
