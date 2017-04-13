import { TestBed, inject } from '@angular/core/testing';

import { Service326Service } from './service-326.service';

describe('Service326Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service326Service]
    });
  });

  it('should ...', inject([Service326Service], (service: Service326Service) => {
    expect(service).toBeTruthy();
  }));
});
