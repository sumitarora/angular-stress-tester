import { TestBed, inject } from '@angular/core/testing';

import { Service843Service } from './service-843.service';

describe('Service843Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service843Service]
    });
  });

  it('should ...', inject([Service843Service], (service: Service843Service) => {
    expect(service).toBeTruthy();
  }));
});
