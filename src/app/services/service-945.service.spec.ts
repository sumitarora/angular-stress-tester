import { TestBed, inject } from '@angular/core/testing';

import { Service945Service } from './service-945.service';

describe('Service945Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service945Service]
    });
  });

  it('should ...', inject([Service945Service], (service: Service945Service) => {
    expect(service).toBeTruthy();
  }));
});
