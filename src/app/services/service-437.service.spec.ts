import { TestBed, inject } from '@angular/core/testing';

import { Service437Service } from './service-437.service';

describe('Service437Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service437Service]
    });
  });

  it('should ...', inject([Service437Service], (service: Service437Service) => {
    expect(service).toBeTruthy();
  }));
});
