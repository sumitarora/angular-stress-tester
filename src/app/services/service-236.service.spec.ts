import { TestBed, inject } from '@angular/core/testing';

import { Service236Service } from './service-236.service';

describe('Service236Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service236Service]
    });
  });

  it('should ...', inject([Service236Service], (service: Service236Service) => {
    expect(service).toBeTruthy();
  }));
});
