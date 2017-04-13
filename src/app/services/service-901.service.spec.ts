import { TestBed, inject } from '@angular/core/testing';

import { Service901Service } from './service-901.service';

describe('Service901Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service901Service]
    });
  });

  it('should ...', inject([Service901Service], (service: Service901Service) => {
    expect(service).toBeTruthy();
  }));
});
