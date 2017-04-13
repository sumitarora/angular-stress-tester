import { TestBed, inject } from '@angular/core/testing';

import { Service19Service } from './service-19.service';

describe('Service19Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service19Service]
    });
  });

  it('should ...', inject([Service19Service], (service: Service19Service) => {
    expect(service).toBeTruthy();
  }));
});
