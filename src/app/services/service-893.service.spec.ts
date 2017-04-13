import { TestBed, inject } from '@angular/core/testing';

import { Service893Service } from './service-893.service';

describe('Service893Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service893Service]
    });
  });

  it('should ...', inject([Service893Service], (service: Service893Service) => {
    expect(service).toBeTruthy();
  }));
});
