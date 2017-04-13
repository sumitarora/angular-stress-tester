import { TestBed, inject } from '@angular/core/testing';

import { Service637Service } from './service-637.service';

describe('Service637Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service637Service]
    });
  });

  it('should ...', inject([Service637Service], (service: Service637Service) => {
    expect(service).toBeTruthy();
  }));
});
