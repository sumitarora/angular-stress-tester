import { TestBed, inject } from '@angular/core/testing';

import { Service846Service } from './service-846.service';

describe('Service846Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service846Service]
    });
  });

  it('should ...', inject([Service846Service], (service: Service846Service) => {
    expect(service).toBeTruthy();
  }));
});
