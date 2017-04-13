import { TestBed, inject } from '@angular/core/testing';

import { Service389Service } from './service-389.service';

describe('Service389Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service389Service]
    });
  });

  it('should ...', inject([Service389Service], (service: Service389Service) => {
    expect(service).toBeTruthy();
  }));
});
