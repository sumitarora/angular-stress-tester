import { TestBed, inject } from '@angular/core/testing';

import { Service102Service } from './service-102.service';

describe('Service102Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service102Service]
    });
  });

  it('should ...', inject([Service102Service], (service: Service102Service) => {
    expect(service).toBeTruthy();
  }));
});
