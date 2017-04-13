import { TestBed, inject } from '@angular/core/testing';

import { Service286Service } from './service-286.service';

describe('Service286Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service286Service]
    });
  });

  it('should ...', inject([Service286Service], (service: Service286Service) => {
    expect(service).toBeTruthy();
  }));
});
