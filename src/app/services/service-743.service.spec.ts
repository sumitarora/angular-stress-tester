import { TestBed, inject } from '@angular/core/testing';

import { Service743Service } from './service-743.service';

describe('Service743Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service743Service]
    });
  });

  it('should ...', inject([Service743Service], (service: Service743Service) => {
    expect(service).toBeTruthy();
  }));
});
