import { TestBed, inject } from '@angular/core/testing';

import { Service998Service } from './service-998.service';

describe('Service998Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service998Service]
    });
  });

  it('should ...', inject([Service998Service], (service: Service998Service) => {
    expect(service).toBeTruthy();
  }));
});
