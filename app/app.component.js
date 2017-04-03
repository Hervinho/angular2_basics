System.register(['angular2/core', './courses.component', './favorite.component', './like.component', './vote.component', './summary.pipe', './contact.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, favorite_component_1, like_component_1, vote_component_1, summary_pipe_1, contact_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.viewMode = 'map';
                    this.courses = [];
                    this.myCourses = ['NodeJS', 'TypeScript', 'AngularJS'];
                    this.title = "My Angular App";
                    this.imgUrl = "http://lorempixel.com/400/200/";
                    this.isActive = false;
                    this.post = {
                        isFavorite: true
                    };
                    this.myPost = {
                        title: 'POST',
                        body: 'hjwhedhwheiwijeoewieuiwueiuwiu3eiu3wie4ihw. ieuiuoeoiwoieo2iwpoe2po3w-23wo2qp3wo2qio3woq23wo2i3wo2ueouoe2'
                    };
                    this.task = {
                        title: 'Unit Test',
                        assignee: null
                    };
                    this.tweet = {
                        totalLikes: 5,
                        iLike: false
                    };
                    this.voter = {
                        voteCount: 5,
                        myVote: 0
                    };
                }
                // @Input() isFavorite = false; //make isFavorite available to consumer by calling input decorator
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation(); //div event will not be called
                    console.log('Event', $event);
                };
                AppComponent.prototype.onDivClick = function () {
                    console.log('Event Handled by div');
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log('onFavoriteChange Event', $event);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log('onVote Event', $event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        //selector: 'favorite',
                        //two-way binding
                        //class binding. <button class="btn btn-primary" [class.active] = "isActive">Hi!</button>
                        //style binding. If button is active, color is blue, else yellow
                        //event binding. Use () when calling a method.
                        //summary is a custom pipe.
                        template: " <div [hidden]=\"courses.length == 0\">List of Courses</div>\n                <div [hidden]=\"courses.length > 0\">No Courses</div>\n                <input type=\"text\" [value] =\"title\" (input) = \"title = $event.target.value\"/><br>\n                <input type=\"button\" (click)=\"title = ''\" value=\"CLEAR\"/>\n                <input type=\"text\" bindon-ngModel = \"title\"/>\n                Preview: {{title}}\n                <br><button class=\"btn btn-primary\" [class.active] = \"isActive\">Hi!</button>\n                <br><button class=\"btn btn-primary\" [style.backgroundColor] = \"isActive ? 'blue' : 'yellow'\">Sup!</button>\n                <br><div (click) = \"onDivClick()\">\n                    <button (click)=\"onClick($event)\">Event</button>\n                </div>\n                <br><h1>{{title}}</h1><img src=\"{{imgUrl}}\" />\n                <br><i class=\"glyphicon glyphicon-star\"></i>\n                <br><favorite [is-favorite] = \"post.isFavorite\" (change) = \"onFavoriteChange($event)\"></favorite>\n                <br><like [totalLikes] = \"tweet.totalLikes\" [iLike] = \"tweet.iLike\"></like>\n                <br><vote [voteCount] = \"voter.voteCount\" [myVote] = \"voter.myVote\" (vote) = \"onVote($event)\"></vote>\n                <ul class=\"nav nav-pills\">\n                    <li><a (click) = \"viewMode = 'map'\">View Map</a></li>\n                    <li><a (click) = \"viewMode = 'list'\">List View</a></li>\n                </ul>\n                <div [ngSwitch] = \"viewMode\">\n                    <template [ngSwitchWhen]=\"'map'\" ngSwitchDefault>Map Content</template>\n                    <template [ngSwitchWhen]=\"'list'\">List Content</template>\n                </div>\n                <ul>\n                    <li *ngFor = \"#myCourse of myCourses, #i = index\">{{i+1}} - {{myCourse | uppercase}}</li>\n                </ul><br><br>\n                {{myPost.title}}<br>\n                {{myPost.body | summary: 15}}<br>\n                <ul>\n                    <li>Title: {{task.title}}</li>\n                    <li>Assignee: {{task.assignee != null ? task.assignee.name : \"No Assignee\"}}</li>\n                    <li>Assignee using Elvis Operator: {{task.assignee?.name}}</li>\n                </ul><br><br>\n                <bs-panel>\n                    <div class=\"heading\">Heading here</div>\n                    <div class=\"body\">Body here</div>\n                </bs-panel><br>\n                <contact-form></contact-form>\n                ",
                        pipes: [summary_pipe_1.SummaryPipe],
                        directives: [courses_component_1.CoursesComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, vote_component_1.VoteComponent, contact_component_1.ContactFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map