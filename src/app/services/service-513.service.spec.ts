import { TestBed, inject } from '@angular/core/testing';

import { Service513Service } from './service-513.service';

describe('Service513Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service513Service]
    });
  });

  it('should ...', inject([Service513Service], (service: Service513Service) => {
    expect(service).toBeTruthy();
  }));
});
