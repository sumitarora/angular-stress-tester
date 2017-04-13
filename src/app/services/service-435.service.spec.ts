import { TestBed, inject } from '@angular/core/testing';

import { Service435Service } from './service-435.service';

describe('Service435Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service435Service]
    });
  });

  it('should ...', inject([Service435Service], (service: Service435Service) => {
    expect(service).toBeTruthy();
  }));
});
