"use strict";
var testing_1 = require('@angular/core/testing');
var logger_service_1 = require('./logger.service');
describe('LoggerService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [logger_service_1.LoggerService]
        });
    });
    it('should be created', testing_1.inject([logger_service_1.LoggerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=logger.service.spec.js.map