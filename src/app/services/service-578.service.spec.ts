import { TestBed, inject } from '@angular/core/testing';

import { Service578Service } from './service-578.service';

describe('Service578Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service578Service]
    });
  });

  it('should ...', inject([Service578Service], (service: Service578Service) => {
    expect(service).toBeTruthy();
  }));
});
