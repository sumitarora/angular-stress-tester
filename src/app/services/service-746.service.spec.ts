import { TestBed, inject } from '@angular/core/testing';

import { Service746Service } from './service-746.service';

describe('Service746Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service746Service]
    });
  });

  it('should ...', inject([Service746Service], (service: Service746Service) => {
    expect(service).toBeTruthy();
  }));
});
