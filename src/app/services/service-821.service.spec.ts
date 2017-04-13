import { TestBed, inject } from '@angular/core/testing';

import { Service821Service } from './service-821.service';

describe('Service821Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service821Service]
    });
  });

  it('should ...', inject([Service821Service], (service: Service821Service) => {
    expect(service).toBeTruthy();
  }));
});
