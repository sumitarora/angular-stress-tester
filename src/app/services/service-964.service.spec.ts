import { TestBed, inject } from '@angular/core/testing';

import { Service964Service } from './service-964.service';

describe('Service964Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service964Service]
    });
  });

  it('should ...', inject([Service964Service], (service: Service964Service) => {
    expect(service).toBeTruthy();
  }));
});
