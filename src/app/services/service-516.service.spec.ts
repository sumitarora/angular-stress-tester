import { TestBed, inject } from '@angular/core/testing';

import { Service516Service } from './service-516.service';

describe('Service516Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service516Service]
    });
  });

  it('should ...', inject([Service516Service], (service: Service516Service) => {
    expect(service).toBeTruthy();
  }));
});
