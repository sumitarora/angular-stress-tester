import { TestBed, inject } from '@angular/core/testing';

import { Service782Service } from './service-782.service';

describe('Service782Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service782Service]
    });
  });

  it('should ...', inject([Service782Service], (service: Service782Service) => {
    expect(service).toBeTruthy();
  }));
});
