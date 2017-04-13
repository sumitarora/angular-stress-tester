import { TestBed, inject } from '@angular/core/testing';

import { Service556Service } from './service-556.service';

describe('Service556Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service556Service]
    });
  });

  it('should ...', inject([Service556Service], (service: Service556Service) => {
    expect(service).toBeTruthy();
  }));
});
