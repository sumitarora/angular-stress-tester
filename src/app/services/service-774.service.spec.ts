import { TestBed, inject } from '@angular/core/testing';

import { Service774Service } from './service-774.service';

describe('Service774Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service774Service]
    });
  });

  it('should ...', inject([Service774Service], (service: Service774Service) => {
    expect(service).toBeTruthy();
  }));
});
