import { TestBed, inject } from '@angular/core/testing';

import { Service994Service } from './service-994.service';

describe('Service994Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service994Service]
    });
  });

  it('should ...', inject([Service994Service], (service: Service994Service) => {
    expect(service).toBeTruthy();
  }));
});
