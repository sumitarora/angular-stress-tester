import { TestBed, inject } from '@angular/core/testing';

import { Service993Service } from './service-993.service';

describe('Service993Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service993Service]
    });
  });

  it('should ...', inject([Service993Service], (service: Service993Service) => {
    expect(service).toBeTruthy();
  }));
});
