import { TestBed, inject } from '@angular/core/testing';

import { Service787Service } from './service-787.service';

describe('Service787Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service787Service]
    });
  });

  it('should ...', inject([Service787Service], (service: Service787Service) => {
    expect(service).toBeTruthy();
  }));
});
