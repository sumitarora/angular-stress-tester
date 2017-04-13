import { TestBed, inject } from '@angular/core/testing';

import { Service766Service } from './service-766.service';

describe('Service766Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service766Service]
    });
  });

  it('should ...', inject([Service766Service], (service: Service766Service) => {
    expect(service).toBeTruthy();
  }));
});
