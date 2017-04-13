import { TestBed, inject } from '@angular/core/testing';

import { Service274Service } from './service-274.service';

describe('Service274Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service274Service]
    });
  });

  it('should ...', inject([Service274Service], (service: Service274Service) => {
    expect(service).toBeTruthy();
  }));
});
