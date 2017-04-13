import { TestBed, inject } from '@angular/core/testing';

import { Service957Service } from './service-957.service';

describe('Service957Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service957Service]
    });
  });

  it('should ...', inject([Service957Service], (service: Service957Service) => {
    expect(service).toBeTruthy();
  }));
});
