import { TestBed, inject } from '@angular/core/testing';

import { Service79Service } from './service-79.service';

describe('Service79Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service79Service]
    });
  });

  it('should ...', inject([Service79Service], (service: Service79Service) => {
    expect(service).toBeTruthy();
  }));
});
