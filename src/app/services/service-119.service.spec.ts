import { TestBed, inject } from '@angular/core/testing';

import { Service119Service } from './service-119.service';

describe('Service119Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service119Service]
    });
  });

  it('should ...', inject([Service119Service], (service: Service119Service) => {
    expect(service).toBeTruthy();
  }));
});
