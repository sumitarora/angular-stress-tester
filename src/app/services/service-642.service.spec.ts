import { TestBed, inject } from '@angular/core/testing';

import { Service642Service } from './service-642.service';

describe('Service642Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service642Service]
    });
  });

  it('should ...', inject([Service642Service], (service: Service642Service) => {
    expect(service).toBeTruthy();
  }));
});
