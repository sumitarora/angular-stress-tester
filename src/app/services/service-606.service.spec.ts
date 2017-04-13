import { TestBed, inject } from '@angular/core/testing';

import { Service606Service } from './service-606.service';

describe('Service606Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service606Service]
    });
  });

  it('should ...', inject([Service606Service], (service: Service606Service) => {
    expect(service).toBeTruthy();
  }));
});
