import { TestBed, inject } from '@angular/core/testing';

import { Service791Service } from './service-791.service';

describe('Service791Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service791Service]
    });
  });

  it('should ...', inject([Service791Service], (service: Service791Service) => {
    expect(service).toBeTruthy();
  }));
});
