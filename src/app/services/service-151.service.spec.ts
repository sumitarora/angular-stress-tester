import { TestBed, inject } from '@angular/core/testing';

import { Service151Service } from './service-151.service';

describe('Service151Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service151Service]
    });
  });

  it('should ...', inject([Service151Service], (service: Service151Service) => {
    expect(service).toBeTruthy();
  }));
});
