import { TestBed, inject } from '@angular/core/testing';

import { Service256Service } from './service-256.service';

describe('Service256Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service256Service]
    });
  });

  it('should ...', inject([Service256Service], (service: Service256Service) => {
    expect(service).toBeTruthy();
  }));
});
