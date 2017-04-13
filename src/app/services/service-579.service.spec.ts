import { TestBed, inject } from '@angular/core/testing';

import { Service579Service } from './service-579.service';

describe('Service579Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service579Service]
    });
  });

  it('should ...', inject([Service579Service], (service: Service579Service) => {
    expect(service).toBeTruthy();
  }));
});
