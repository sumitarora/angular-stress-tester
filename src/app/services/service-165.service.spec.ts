import { TestBed, inject } from '@angular/core/testing';

import { Service165Service } from './service-165.service';

describe('Service165Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service165Service]
    });
  });

  it('should ...', inject([Service165Service], (service: Service165Service) => {
    expect(service).toBeTruthy();
  }));
});
