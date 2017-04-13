import { TestBed, inject } from '@angular/core/testing';

import { Service858Service } from './service-858.service';

describe('Service858Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service858Service]
    });
  });

  it('should ...', inject([Service858Service], (service: Service858Service) => {
    expect(service).toBeTruthy();
  }));
});
