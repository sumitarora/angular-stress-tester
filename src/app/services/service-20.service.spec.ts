import { TestBed, inject } from '@angular/core/testing';

import { Service20Service } from './service-20.service';

describe('Service20Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service20Service]
    });
  });

  it('should ...', inject([Service20Service], (service: Service20Service) => {
    expect(service).toBeTruthy();
  }));
});
