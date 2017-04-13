import { TestBed, inject } from '@angular/core/testing';

import { Service563Service } from './service-563.service';

describe('Service563Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service563Service]
    });
  });

  it('should ...', inject([Service563Service], (service: Service563Service) => {
    expect(service).toBeTruthy();
  }));
});
