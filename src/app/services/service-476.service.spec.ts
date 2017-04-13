import { TestBed, inject } from '@angular/core/testing';

import { Service476Service } from './service-476.service';

describe('Service476Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service476Service]
    });
  });

  it('should ...', inject([Service476Service], (service: Service476Service) => {
    expect(service).toBeTruthy();
  }));
});
