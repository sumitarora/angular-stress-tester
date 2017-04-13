import { TestBed, inject } from '@angular/core/testing';

import { Service559Service } from './service-559.service';

describe('Service559Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service559Service]
    });
  });

  it('should ...', inject([Service559Service], (service: Service559Service) => {
    expect(service).toBeTruthy();
  }));
});
