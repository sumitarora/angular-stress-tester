import { TestBed, inject } from '@angular/core/testing';

import { Service772Service } from './service-772.service';

describe('Service772Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service772Service]
    });
  });

  it('should ...', inject([Service772Service], (service: Service772Service) => {
    expect(service).toBeTruthy();
  }));
});
