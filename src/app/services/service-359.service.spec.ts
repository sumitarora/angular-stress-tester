import { TestBed, inject } from '@angular/core/testing';

import { Service359Service } from './service-359.service';

describe('Service359Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service359Service]
    });
  });

  it('should ...', inject([Service359Service], (service: Service359Service) => {
    expect(service).toBeTruthy();
  }));
});
