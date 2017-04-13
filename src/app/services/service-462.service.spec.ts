import { TestBed, inject } from '@angular/core/testing';

import { Service462Service } from './service-462.service';

describe('Service462Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service462Service]
    });
  });

  it('should ...', inject([Service462Service], (service: Service462Service) => {
    expect(service).toBeTruthy();
  }));
});
