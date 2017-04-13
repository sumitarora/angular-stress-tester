import { TestBed, inject } from '@angular/core/testing';

import { Service460Service } from './service-460.service';

describe('Service460Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service460Service]
    });
  });

  it('should ...', inject([Service460Service], (service: Service460Service) => {
    expect(service).toBeTruthy();
  }));
});
