import { TestBed, inject } from '@angular/core/testing';

import { Service108Service } from './service-108.service';

describe('Service108Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service108Service]
    });
  });

  it('should ...', inject([Service108Service], (service: Service108Service) => {
    expect(service).toBeTruthy();
  }));
});
