import { TestBed, inject } from '@angular/core/testing';

import { Service24Service } from './service-24.service';

describe('Service24Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service24Service]
    });
  });

  it('should ...', inject([Service24Service], (service: Service24Service) => {
    expect(service).toBeTruthy();
  }));
});
