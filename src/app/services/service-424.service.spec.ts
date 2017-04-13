import { TestBed, inject } from '@angular/core/testing';

import { Service424Service } from './service-424.service';

describe('Service424Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service424Service]
    });
  });

  it('should ...', inject([Service424Service], (service: Service424Service) => {
    expect(service).toBeTruthy();
  }));
});
