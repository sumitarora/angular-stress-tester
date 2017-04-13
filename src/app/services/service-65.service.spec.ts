import { TestBed, inject } from '@angular/core/testing';

import { Service65Service } from './service-65.service';

describe('Service65Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service65Service]
    });
  });

  it('should ...', inject([Service65Service], (service: Service65Service) => {
    expect(service).toBeTruthy();
  }));
});
