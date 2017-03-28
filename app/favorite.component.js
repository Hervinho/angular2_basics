System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FavoriteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavoriteComponent = (function () {
                function FavoriteComponent() {
                    this.isActive = false;
                    this.isFavorite = false; //make isFavorite available to consumer by calling input decorator. itbecomes input property
                    this.change = new core_1.EventEmitter(); //event that must be called when favorite icon is clicked
                }
                //@Output('favoriteChange') change = new EventEmitter();
                FavoriteComponent.prototype.onStarClick = function () {
                    this.isFavorite = !this.isFavorite;
                    this.change.emit({ newVal: this.isFavorite });
                };
                __decorate([
                    core_1.Input('is-favorite'), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "isFavorite", void 0);
                __decorate([
                    //make isFavorite available to consumer by calling input decorator. itbecomes input property
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "change", void 0);
                FavoriteComponent = __decorate([
                    core_1.Component({
                        selector: 'favorite',
                        //selector: 'favorite',
                        //two-way binding
                        //class binding. <button class="btn btn-primary" [class.active] = "isActive">Hi!</button>
                        //style binding. If button is active, color is blue, else yellow
                        //event binding. Use () when calling a method.
                        templateUrl: 'app/favorite.template.html',
                        styles: ["\n                .glyphicon-star{\n                    color: orange;\n                }\n            "],
                        //styleUrls: [], //causes extra http requests
                        inputs: ['isFavorite: is-favorite'] //with this, no need for input decorator @Input.
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoriteComponent);
                return FavoriteComponent;
            }());
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    }
});
//# sourceMappingURL=favorite.component.js.map