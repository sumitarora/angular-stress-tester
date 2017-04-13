import { TestBed, inject } from '@angular/core/testing';

import { Service794Service } from './service-794.service';

describe('Service794Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service794Service]
    });
  });

  it('should ...', inject([Service794Service], (service: Service794Service) => {
    expect(service).toBeTruthy();
  }));
});
