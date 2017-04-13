import { TestBed, inject } from '@angular/core/testing';

import { Service985Service } from './service-985.service';

describe('Service985Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service985Service]
    });
  });

  it('should ...', inject([Service985Service], (service: Service985Service) => {
    expect(service).toBeTruthy();
  }));
});
