import { TestBed, inject } from '@angular/core/testing';

import { Service524Service } from './service-524.service';

describe('Service524Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service524Service]
    });
  });

  it('should ...', inject([Service524Service], (service: Service524Service) => {
    expect(service).toBeTruthy();
  }));
});
