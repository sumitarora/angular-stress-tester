import { TestBed, inject } from '@angular/core/testing';

import { Service869Service } from './service-869.service';

describe('Service869Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service869Service]
    });
  });

  it('should ...', inject([Service869Service], (service: Service869Service) => {
    expect(service).toBeTruthy();
  }));
});
