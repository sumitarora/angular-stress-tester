import { TestBed, inject } from '@angular/core/testing';

import { Service248Service } from './service-248.service';

describe('Service248Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service248Service]
    });
  });

  it('should ...', inject([Service248Service], (service: Service248Service) => {
    expect(service).toBeTruthy();
  }));
});
