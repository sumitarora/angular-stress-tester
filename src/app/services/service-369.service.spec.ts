import { TestBed, inject } from '@angular/core/testing';

import { Service369Service } from './service-369.service';

describe('Service369Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service369Service]
    });
  });

  it('should ...', inject([Service369Service], (service: Service369Service) => {
    expect(service).toBeTruthy();
  }));
});
