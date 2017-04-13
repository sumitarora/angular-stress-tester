import { TestBed, inject } from '@angular/core/testing';

import { Service793Service } from './service-793.service';

describe('Service793Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service793Service]
    });
  });

  it('should ...', inject([Service793Service], (service: Service793Service) => {
    expect(service).toBeTruthy();
  }));
});
