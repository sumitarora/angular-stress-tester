import { TestBed, inject } from '@angular/core/testing';

import { Service291Service } from './service-291.service';

describe('Service291Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service291Service]
    });
  });

  it('should ...', inject([Service291Service], (service: Service291Service) => {
    expect(service).toBeTruthy();
  }));
});
