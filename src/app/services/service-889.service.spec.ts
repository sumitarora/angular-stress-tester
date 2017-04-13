import { TestBed, inject } from '@angular/core/testing';

import { Service889Service } from './service-889.service';

describe('Service889Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service889Service]
    });
  });

  it('should ...', inject([Service889Service], (service: Service889Service) => {
    expect(service).toBeTruthy();
  }));
});
