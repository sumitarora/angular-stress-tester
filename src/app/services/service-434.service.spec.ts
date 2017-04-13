import { TestBed, inject } from '@angular/core/testing';

import { Service434Service } from './service-434.service';

describe('Service434Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service434Service]
    });
  });

  it('should ...', inject([Service434Service], (service: Service434Service) => {
    expect(service).toBeTruthy();
  }));
});
