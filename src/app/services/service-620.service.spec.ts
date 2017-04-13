import { TestBed, inject } from '@angular/core/testing';

import { Service620Service } from './service-620.service';

describe('Service620Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service620Service]
    });
  });

  it('should ...', inject([Service620Service], (service: Service620Service) => {
    expect(service).toBeTruthy();
  }));
});
