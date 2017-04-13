import { TestBed, inject } from '@angular/core/testing';

import { Service37Service } from './service-37.service';

describe('Service37Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service37Service]
    });
  });

  it('should ...', inject([Service37Service], (service: Service37Service) => {
    expect(service).toBeTruthy();
  }));
});
