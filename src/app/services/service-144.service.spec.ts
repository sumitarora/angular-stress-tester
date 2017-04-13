import { TestBed, inject } from '@angular/core/testing';

import { Service144Service } from './service-144.service';

describe('Service144Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service144Service]
    });
  });

  it('should ...', inject([Service144Service], (service: Service144Service) => {
    expect(service).toBeTruthy();
  }));
});
