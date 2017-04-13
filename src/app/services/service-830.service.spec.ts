import { TestBed, inject } from '@angular/core/testing';

import { Service830Service } from './service-830.service';

describe('Service830Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service830Service]
    });
  });

  it('should ...', inject([Service830Service], (service: Service830Service) => {
    expect(service).toBeTruthy();
  }));
});
