import { TestBed, inject } from '@angular/core/testing';

import { Service278Service } from './service-278.service';

describe('Service278Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service278Service]
    });
  });

  it('should ...', inject([Service278Service], (service: Service278Service) => {
    expect(service).toBeTruthy();
  }));
});
