import { TestBed, inject } from '@angular/core/testing';

import { Service288Service } from './service-288.service';

describe('Service288Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service288Service]
    });
  });

  it('should ...', inject([Service288Service], (service: Service288Service) => {
    expect(service).toBeTruthy();
  }));
});
