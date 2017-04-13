import { TestBed, inject } from '@angular/core/testing';

import { Service90Service } from './service-90.service';

describe('Service90Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service90Service]
    });
  });

  it('should ...', inject([Service90Service], (service: Service90Service) => {
    expect(service).toBeTruthy();
  }));
});
