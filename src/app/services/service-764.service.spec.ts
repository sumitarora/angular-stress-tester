import { TestBed, inject } from '@angular/core/testing';

import { Service764Service } from './service-764.service';

describe('Service764Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service764Service]
    });
  });

  it('should ...', inject([Service764Service], (service: Service764Service) => {
    expect(service).toBeTruthy();
  }));
});
