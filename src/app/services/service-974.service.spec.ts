import { TestBed, inject } from '@angular/core/testing';

import { Service974Service } from './service-974.service';

describe('Service974Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service974Service]
    });
  });

  it('should ...', inject([Service974Service], (service: Service974Service) => {
    expect(service).toBeTruthy();
  }));
});
