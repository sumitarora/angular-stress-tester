import { TestBed, inject } from '@angular/core/testing';

import { Service844Service } from './service-844.service';

describe('Service844Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service844Service]
    });
  });

  it('should ...', inject([Service844Service], (service: Service844Service) => {
    expect(service).toBeTruthy();
  }));
});
