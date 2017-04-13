import { TestBed, inject } from '@angular/core/testing';

import { Service761Service } from './service-761.service';

describe('Service761Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service761Service]
    });
  });

  it('should ...', inject([Service761Service], (service: Service761Service) => {
    expect(service).toBeTruthy();
  }));
});
