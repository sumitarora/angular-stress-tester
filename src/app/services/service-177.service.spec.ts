import { TestBed, inject } from '@angular/core/testing';

import { Service177Service } from './service-177.service';

describe('Service177Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service177Service]
    });
  });

  it('should ...', inject([Service177Service], (service: Service177Service) => {
    expect(service).toBeTruthy();
  }));
});
