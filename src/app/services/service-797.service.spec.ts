import { TestBed, inject } from '@angular/core/testing';

import { Service797Service } from './service-797.service';

describe('Service797Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service797Service]
    });
  });

  it('should ...', inject([Service797Service], (service: Service797Service) => {
    expect(service).toBeTruthy();
  }));
});
