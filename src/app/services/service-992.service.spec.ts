import { TestBed, inject } from '@angular/core/testing';

import { Service992Service } from './service-992.service';

describe('Service992Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service992Service]
    });
  });

  it('should ...', inject([Service992Service], (service: Service992Service) => {
    expect(service).toBeTruthy();
  }));
});
