import { TestBed, inject } from '@angular/core/testing';

import { Service442Service } from './service-442.service';

describe('Service442Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service442Service]
    });
  });

  it('should ...', inject([Service442Service], (service: Service442Service) => {
    expect(service).toBeTruthy();
  }));
});
