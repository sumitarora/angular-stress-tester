import { TestBed, inject } from '@angular/core/testing';

import { Service776Service } from './service-776.service';

describe('Service776Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service776Service]
    });
  });

  it('should ...', inject([Service776Service], (service: Service776Service) => {
    expect(service).toBeTruthy();
  }));
});
