import { TestBed, inject } from '@angular/core/testing';

import { Service659Service } from './service-659.service';

describe('Service659Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service659Service]
    });
  });

  it('should ...', inject([Service659Service], (service: Service659Service) => {
    expect(service).toBeTruthy();
  }));
});
