import { TestBed, inject } from '@angular/core/testing';

import { Service988Service } from './service-988.service';

describe('Service988Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service988Service]
    });
  });

  it('should ...', inject([Service988Service], (service: Service988Service) => {
    expect(service).toBeTruthy();
  }));
});
