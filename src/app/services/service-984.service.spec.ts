import { TestBed, inject } from '@angular/core/testing';

import { Service984Service } from './service-984.service';

describe('Service984Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service984Service]
    });
  });

  it('should ...', inject([Service984Service], (service: Service984Service) => {
    expect(service).toBeTruthy();
  }));
});
