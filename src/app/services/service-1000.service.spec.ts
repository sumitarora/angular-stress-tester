import { TestBed, inject } from '@angular/core/testing';

import { Service1000Service } from './service-1000.service';

describe('Service1000Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service1000Service]
    });
  });

  it('should ...', inject([Service1000Service], (service: Service1000Service) => {
    expect(service).toBeTruthy();
  }));
});
