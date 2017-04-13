import { TestBed, inject } from '@angular/core/testing';

import { Service574Service } from './service-574.service';

describe('Service574Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service574Service]
    });
  });

  it('should ...', inject([Service574Service], (service: Service574Service) => {
    expect(service).toBeTruthy();
  }));
});
