import { TestBed, inject } from '@angular/core/testing';

import { Service161Service } from './service-161.service';

describe('Service161Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service161Service]
    });
  });

  it('should ...', inject([Service161Service], (service: Service161Service) => {
    expect(service).toBeTruthy();
  }));
});
