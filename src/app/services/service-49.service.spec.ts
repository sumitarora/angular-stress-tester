import { TestBed, inject } from '@angular/core/testing';

import { Service49Service } from './service-49.service';

describe('Service49Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service49Service]
    });
  });

  it('should ...', inject([Service49Service], (service: Service49Service) => {
    expect(service).toBeTruthy();
  }));
});
