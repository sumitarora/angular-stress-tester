import { TestBed, inject } from '@angular/core/testing';

import { Service619Service } from './service-619.service';

describe('Service619Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service619Service]
    });
  });

  it('should ...', inject([Service619Service], (service: Service619Service) => {
    expect(service).toBeTruthy();
  }));
});
