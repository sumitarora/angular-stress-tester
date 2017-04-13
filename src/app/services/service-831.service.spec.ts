import { TestBed, inject } from '@angular/core/testing';

import { Service831Service } from './service-831.service';

describe('Service831Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service831Service]
    });
  });

  it('should ...', inject([Service831Service], (service: Service831Service) => {
    expect(service).toBeTruthy();
  }));
});
