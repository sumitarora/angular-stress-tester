import { TestBed, inject } from '@angular/core/testing';

import { Service749Service } from './service-749.service';

describe('Service749Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service749Service]
    });
  });

  it('should ...', inject([Service749Service], (service: Service749Service) => {
    expect(service).toBeTruthy();
  }));
});
