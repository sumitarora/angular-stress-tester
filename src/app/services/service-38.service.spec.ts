import { TestBed, inject } from '@angular/core/testing';

import { Service38Service } from './service-38.service';

describe('Service38Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service38Service]
    });
  });

  it('should ...', inject([Service38Service], (service: Service38Service) => {
    expect(service).toBeTruthy();
  }));
});
