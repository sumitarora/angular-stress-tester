import { TestBed, inject } from '@angular/core/testing';

import { Service638Service } from './service-638.service';

describe('Service638Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service638Service]
    });
  });

  it('should ...', inject([Service638Service], (service: Service638Service) => {
    expect(service).toBeTruthy();
  }));
});
