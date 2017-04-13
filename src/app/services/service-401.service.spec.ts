import { TestBed, inject } from '@angular/core/testing';

import { Service401Service } from './service-401.service';

describe('Service401Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service401Service]
    });
  });

  it('should ...', inject([Service401Service], (service: Service401Service) => {
    expect(service).toBeTruthy();
  }));
});
