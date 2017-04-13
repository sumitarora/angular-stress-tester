import { TestBed, inject } from '@angular/core/testing';

import { Service198Service } from './service-198.service';

describe('Service198Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service198Service]
    });
  });

  it('should ...', inject([Service198Service], (service: Service198Service) => {
    expect(service).toBeTruthy();
  }));
});
