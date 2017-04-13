import { TestBed, inject } from '@angular/core/testing';

import { Service674Service } from './service-674.service';

describe('Service674Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service674Service]
    });
  });

  it('should ...', inject([Service674Service], (service: Service674Service) => {
    expect(service).toBeTruthy();
  }));
});
