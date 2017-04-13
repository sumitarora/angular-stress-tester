import { TestBed, inject } from '@angular/core/testing';

import { Service152Service } from './service-152.service';

describe('Service152Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service152Service]
    });
  });

  it('should ...', inject([Service152Service], (service: Service152Service) => {
    expect(service).toBeTruthy();
  }));
});
