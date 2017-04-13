import { TestBed, inject } from '@angular/core/testing';

import { Service54Service } from './service-54.service';

describe('Service54Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service54Service]
    });
  });

  it('should ...', inject([Service54Service], (service: Service54Service) => {
    expect(service).toBeTruthy();
  }));
});
