import { TestBed, inject } from '@angular/core/testing';

import { Service530Service } from './service-530.service';

describe('Service530Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service530Service]
    });
  });

  it('should ...', inject([Service530Service], (service: Service530Service) => {
    expect(service).toBeTruthy();
  }));
});
