import { TestBed, inject } from '@angular/core/testing';

import { Service135Service } from './service-135.service';

describe('Service135Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service135Service]
    });
  });

  it('should ...', inject([Service135Service], (service: Service135Service) => {
    expect(service).toBeTruthy();
  }));
});
