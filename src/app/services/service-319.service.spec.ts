import { TestBed, inject } from '@angular/core/testing';

import { Service319Service } from './service-319.service';

describe('Service319Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service319Service]
    });
  });

  it('should ...', inject([Service319Service], (service: Service319Service) => {
    expect(service).toBeTruthy();
  }));
});
