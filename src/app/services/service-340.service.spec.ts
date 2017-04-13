import { TestBed, inject } from '@angular/core/testing';

import { Service340Service } from './service-340.service';

describe('Service340Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service340Service]
    });
  });

  it('should ...', inject([Service340Service], (service: Service340Service) => {
    expect(service).toBeTruthy();
  }));
});
