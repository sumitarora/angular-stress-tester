import { TestBed, inject } from '@angular/core/testing';

import { Service478Service } from './service-478.service';

describe('Service478Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service478Service]
    });
  });

  it('should ...', inject([Service478Service], (service: Service478Service) => {
    expect(service).toBeTruthy();
  }));
});
