import { TestBed, inject } from '@angular/core/testing';

import { Service707Service } from './service-707.service';

describe('Service707Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service707Service]
    });
  });

  it('should ...', inject([Service707Service], (service: Service707Service) => {
    expect(service).toBeTruthy();
  }));
});
