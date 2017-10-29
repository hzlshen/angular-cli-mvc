/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnotherProductService } from './another-product.service';

describe('AnotherProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotherProductService]
    });
  });

  it('should ...', inject([AnotherProductService], (service: AnotherProductService) => {
    expect(service).toBeTruthy();
  }));
});
