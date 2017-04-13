import { TestBed, inject } from '@angular/core/testing';

import { Service448Service } from './service-448.service';

describe('Service448Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service448Service]
    });
  });

  it('should ...', inject([Service448Service], (service: Service448Service) => {
    expect(service).toBeTruthy();
  }));
});
