"use strict";
var testing_1 = require('@angular/core/testing');
var carousel_component_1 = require('./carousel.component');
describe('CarouselComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [carousel_component_1.CarouselComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(carousel_component_1.CarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=carousel.component.spec.js.map