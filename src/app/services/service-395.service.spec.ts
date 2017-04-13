import { TestBed, inject } from '@angular/core/testing';

import { Service395Service } from './service-395.service';

describe('Service395Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service395Service]
    });
  });

  it('should ...', inject([Service395Service], (service: Service395Service) => {
    expect(service).toBeTruthy();
  }));
});
