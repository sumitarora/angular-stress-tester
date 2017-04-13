import { TestBed, inject } from '@angular/core/testing';

import { Service955Service } from './service-955.service';

describe('Service955Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service955Service]
    });
  });

  it('should ...', inject([Service955Service], (service: Service955Service) => {
    expect(service).toBeTruthy();
  }));
});
