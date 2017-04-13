import { TestBed, inject } from '@angular/core/testing';

import { Service866Service } from './service-866.service';

describe('Service866Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service866Service]
    });
  });

  it('should ...', inject([Service866Service], (service: Service866Service) => {
    expect(service).toBeTruthy();
  }));
});
