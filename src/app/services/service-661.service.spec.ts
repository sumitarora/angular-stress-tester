import { TestBed, inject } from '@angular/core/testing';

import { Service661Service } from './service-661.service';

describe('Service661Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service661Service]
    });
  });

  it('should ...', inject([Service661Service], (service: Service661Service) => {
    expect(service).toBeTruthy();
  }));
});
