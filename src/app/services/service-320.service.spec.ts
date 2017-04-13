import { TestBed, inject } from '@angular/core/testing';

import { Service320Service } from './service-320.service';

describe('Service320Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service320Service]
    });
  });

  it('should ...', inject([Service320Service], (service: Service320Service) => {
    expect(service).toBeTruthy();
  }));
});
