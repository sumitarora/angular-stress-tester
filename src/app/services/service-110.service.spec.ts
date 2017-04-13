import { TestBed, inject } from '@angular/core/testing';

import { Service110Service } from './service-110.service';

describe('Service110Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service110Service]
    });
  });

  it('should ...', inject([Service110Service], (service: Service110Service) => {
    expect(service).toBeTruthy();
  }));
});
