import { TestBed, inject } from '@angular/core/testing';

import { Service284Service } from './service-284.service';

describe('Service284Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service284Service]
    });
  });

  it('should ...', inject([Service284Service], (service: Service284Service) => {
    expect(service).toBeTruthy();
  }));
});
