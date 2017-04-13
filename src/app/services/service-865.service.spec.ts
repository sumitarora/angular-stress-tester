import { TestBed, inject } from '@angular/core/testing';

import { Service865Service } from './service-865.service';

describe('Service865Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service865Service]
    });
  });

  it('should ...', inject([Service865Service], (service: Service865Service) => {
    expect(service).toBeTruthy();
  }));
});
