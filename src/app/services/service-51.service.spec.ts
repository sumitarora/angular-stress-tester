import { TestBed, inject } from '@angular/core/testing';

import { Service51Service } from './service-51.service';

describe('Service51Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service51Service]
    });
  });

  it('should ...', inject([Service51Service], (service: Service51Service) => {
    expect(service).toBeTruthy();
  }));
});
