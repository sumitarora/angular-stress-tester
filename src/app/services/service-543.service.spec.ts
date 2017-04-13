import { TestBed, inject } from '@angular/core/testing';

import { Service543Service } from './service-543.service';

describe('Service543Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service543Service]
    });
  });

  it('should ...', inject([Service543Service], (service: Service543Service) => {
    expect(service).toBeTruthy();
  }));
});
