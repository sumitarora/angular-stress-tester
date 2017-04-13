import { TestBed, inject } from '@angular/core/testing';

import { Service331Service } from './service-331.service';

describe('Service331Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service331Service]
    });
  });

  it('should ...', inject([Service331Service], (service: Service331Service) => {
    expect(service).toBeTruthy();
  }));
});
