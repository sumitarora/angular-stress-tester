import { TestBed, inject } from '@angular/core/testing';

import { Service467Service } from './service-467.service';

describe('Service467Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service467Service]
    });
  });

  it('should ...', inject([Service467Service], (service: Service467Service) => {
    expect(service).toBeTruthy();
  }));
});
