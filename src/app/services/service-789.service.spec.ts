import { TestBed, inject } from '@angular/core/testing';

import { Service789Service } from './service-789.service';

describe('Service789Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service789Service]
    });
  });

  it('should ...', inject([Service789Service], (service: Service789Service) => {
    expect(service).toBeTruthy();
  }));
});
