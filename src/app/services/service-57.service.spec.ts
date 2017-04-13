import { TestBed, inject } from '@angular/core/testing';

import { Service57Service } from './service-57.service';

describe('Service57Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service57Service]
    });
  });

  it('should ...', inject([Service57Service], (service: Service57Service) => {
    expect(service).toBeTruthy();
  }));
});
