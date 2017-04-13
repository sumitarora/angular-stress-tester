import { TestBed, inject } from '@angular/core/testing';

import { Service662Service } from './service-662.service';

describe('Service662Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service662Service]
    });
  });

  it('should ...', inject([Service662Service], (service: Service662Service) => {
    expect(service).toBeTruthy();
  }));
});
