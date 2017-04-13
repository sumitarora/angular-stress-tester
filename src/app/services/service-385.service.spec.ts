import { TestBed, inject } from '@angular/core/testing';

import { Service385Service } from './service-385.service';

describe('Service385Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service385Service]
    });
  });

  it('should ...', inject([Service385Service], (service: Service385Service) => {
    expect(service).toBeTruthy();
  }));
});
