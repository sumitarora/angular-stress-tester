import { TestBed, inject } from '@angular/core/testing';

import { Service587Service } from './service-587.service';

describe('Service587Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service587Service]
    });
  });

  it('should ...', inject([Service587Service], (service: Service587Service) => {
    expect(service).toBeTruthy();
  }));
});
