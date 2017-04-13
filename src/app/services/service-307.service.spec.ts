import { TestBed, inject } from '@angular/core/testing';

import { Service307Service } from './service-307.service';

describe('Service307Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service307Service]
    });
  });

  it('should ...', inject([Service307Service], (service: Service307Service) => {
    expect(service).toBeTruthy();
  }));
});
