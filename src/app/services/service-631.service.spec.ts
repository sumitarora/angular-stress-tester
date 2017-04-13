import { TestBed, inject } from '@angular/core/testing';

import { Service631Service } from './service-631.service';

describe('Service631Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service631Service]
    });
  });

  it('should ...', inject([Service631Service], (service: Service631Service) => {
    expect(service).toBeTruthy();
  }));
});
