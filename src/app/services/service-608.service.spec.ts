import { TestBed, inject } from '@angular/core/testing';

import { Service608Service } from './service-608.service';

describe('Service608Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service608Service]
    });
  });

  it('should ...', inject([Service608Service], (service: Service608Service) => {
    expect(service).toBeTruthy();
  }));
});
