import { TestBed, inject } from '@angular/core/testing';

import { Service162Service } from './service-162.service';

describe('Service162Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service162Service]
    });
  });

  it('should ...', inject([Service162Service], (service: Service162Service) => {
    expect(service).toBeTruthy();
  }));
});
