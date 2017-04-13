import { TestBed, inject } from '@angular/core/testing';

import { Service613Service } from './service-613.service';

describe('Service613Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service613Service]
    });
  });

  it('should ...', inject([Service613Service], (service: Service613Service) => {
    expect(service).toBeTruthy();
  }));
});
