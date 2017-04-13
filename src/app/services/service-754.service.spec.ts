import { TestBed, inject } from '@angular/core/testing';

import { Service754Service } from './service-754.service';

describe('Service754Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service754Service]
    });
  });

  it('should ...', inject([Service754Service], (service: Service754Service) => {
    expect(service).toBeTruthy();
  }));
});
