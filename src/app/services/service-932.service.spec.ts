import { TestBed, inject } from '@angular/core/testing';

import { Service932Service } from './service-932.service';

describe('Service932Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service932Service]
    });
  });

  it('should ...', inject([Service932Service], (service: Service932Service) => {
    expect(service).toBeTruthy();
  }));
});
