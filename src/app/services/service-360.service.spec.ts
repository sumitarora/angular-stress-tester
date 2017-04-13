import { TestBed, inject } from '@angular/core/testing';

import { Service360Service } from './service-360.service';

describe('Service360Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service360Service]
    });
  });

  it('should ...', inject([Service360Service], (service: Service360Service) => {
    expect(service).toBeTruthy();
  }));
});
