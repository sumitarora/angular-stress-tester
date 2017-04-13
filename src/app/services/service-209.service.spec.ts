import { TestBed, inject } from '@angular/core/testing';

import { Service209Service } from './service-209.service';

describe('Service209Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service209Service]
    });
  });

  it('should ...', inject([Service209Service], (service: Service209Service) => {
    expect(service).toBeTruthy();
  }));
});
