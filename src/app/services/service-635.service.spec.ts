import { TestBed, inject } from '@angular/core/testing';

import { Service635Service } from './service-635.service';

describe('Service635Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service635Service]
    });
  });

  it('should ...', inject([Service635Service], (service: Service635Service) => {
    expect(service).toBeTruthy();
  }));
});
