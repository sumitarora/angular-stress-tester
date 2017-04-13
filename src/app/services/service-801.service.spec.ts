import { TestBed, inject } from '@angular/core/testing';

import { Service801Service } from './service-801.service';

describe('Service801Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service801Service]
    });
  });

  it('should ...', inject([Service801Service], (service: Service801Service) => {
    expect(service).toBeTruthy();
  }));
});
