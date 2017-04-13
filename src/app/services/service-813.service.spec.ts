import { TestBed, inject } from '@angular/core/testing';

import { Service813Service } from './service-813.service';

describe('Service813Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service813Service]
    });
  });

  it('should ...', inject([Service813Service], (service: Service813Service) => {
    expect(service).toBeTruthy();
  }));
});
