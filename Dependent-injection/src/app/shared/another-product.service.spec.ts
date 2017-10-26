import { TestBed, inject } from '@angular/core/testing';

import { AnotherProductService } from './another-product.service';

describe('AnotherProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotherProductService]
    });
  });

  it('should be created', inject([AnotherProductService], (service: AnotherProductService) => {
    expect(service).toBeTruthy();
  }));
});
