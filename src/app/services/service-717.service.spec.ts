import { TestBed, inject } from '@angular/core/testing';

import { Service717Service } from './service-717.service';

describe('Service717Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service717Service]
    });
  });

  it('should ...', inject([Service717Service], (service: Service717Service) => {
    expect(service).toBeTruthy();
  }));
});
