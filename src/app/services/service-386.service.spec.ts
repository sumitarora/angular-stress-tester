import { TestBed, inject } from '@angular/core/testing';

import { Service386Service } from './service-386.service';

describe('Service386Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service386Service]
    });
  });

  it('should ...', inject([Service386Service], (service: Service386Service) => {
    expect(service).toBeTruthy();
  }));
});
