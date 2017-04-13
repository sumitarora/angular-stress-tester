import { TestBed, inject } from '@angular/core/testing';

import { Service705Service } from './service-705.service';

describe('Service705Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service705Service]
    });
  });

  it('should ...', inject([Service705Service], (service: Service705Service) => {
    expect(service).toBeTruthy();
  }));
});
