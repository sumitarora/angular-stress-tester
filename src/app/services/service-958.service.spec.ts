import { TestBed, inject } from '@angular/core/testing';

import { Service958Service } from './service-958.service';

describe('Service958Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service958Service]
    });
  });

  it('should ...', inject([Service958Service], (service: Service958Service) => {
    expect(service).toBeTruthy();
  }));
});
