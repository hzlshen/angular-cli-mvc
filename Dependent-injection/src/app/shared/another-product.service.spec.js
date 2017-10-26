"use strict";
var testing_1 = require('@angular/core/testing');
var another_product_service_1 = require('./another-product.service');
describe('AnotherProductService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [another_product_service_1.AnotherProductService]
        });
    });
    it('should be created', testing_1.inject([another_product_service_1.AnotherProductService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=another-product.service.spec.js.map