import { TestBed, inject } from '@angular/core/testing';

import { Service310Service } from './service-310.service';

describe('Service310Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service310Service]
    });
  });

  it('should ...', inject([Service310Service], (service: Service310Service) => {
    expect(service).toBeTruthy();
  }));
});
