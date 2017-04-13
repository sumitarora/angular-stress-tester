import { TestBed, inject } from '@angular/core/testing';

import { Service95Service } from './service-95.service';

describe('Service95Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service95Service]
    });
  });

  it('should ...', inject([Service95Service], (service: Service95Service) => {
    expect(service).toBeTruthy();
  }));
});
