import {Component, Input} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {SummaryPipe} from './summary.pipe';

@Component({
    selector: 'my-app',
    //selector: 'favorite',
    //two-way binding
    //class binding. <button class="btn btn-primary" [class.active] = "isActive">Hi!</button>
    //style binding. If button is active, color is blue, else yellow
    //event binding. Use () when calling a method.
    //summary is a custom pipe.
    template: ` <div [hidden]="courses.length == 0">List of Courses</div>
                <div [hidden]="courses.length > 0">No Courses</div>
                <input type="text" [value] ="title" (input) = "title = $event.target.value"/><br>
                <input type="button" (click)="title = ''" value="CLEAR"/>
                <input type="text" bindon-ngModel = "title"/>
                Preview: {{title}}
                <br><button class="btn btn-primary" [class.active] = "isActive">Hi!</button>
                <br><button class="btn btn-primary" [style.backgroundColor] = "isActive ? 'blue' : 'yellow'">Sup!</button>
                <br><div (click) = "onDivClick()">
                    <button (click)="onClick($event)">Event</button>
                </div>
                <br><h1>{{title}}</h1><img src="{{imgUrl}}" />
                <br><i class="glyphicon glyphicon-star"></i>
                <br><favorite [is-favorite] = "post.isFavorite" (change) = "onFavoriteChange($event)"></favorite>
                <br><like [totalLikes] = "tweet.totalLikes" [iLike] = "tweet.iLike"></like>
                <br><vote [voteCount] = "voter.voteCount" [myVote] = "voter.myVote" (vote) = "onVote($event)"></vote>
                <ul class="nav nav-pills">
                    <li><a (click) = "viewMode = 'map'">View Map</a></li>
                    <li><a (click) = "viewMode = 'list'">List View</a></li>
                </ul>
                <div [ngSwitch] = "viewMode">
                    <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map Content</template>
                    <template [ngSwitchWhen]="'list'">List Content</template>
                </div>
                <ul>
                    <li *ngFor = "#myCourse of myCourses, #i = index">{{i+1}} - {{myCourse | uppercase}}</li>
                </ul><br><br>
                {{myPost.title}}<br>
                {{myPost.body | summary: 15}}
                `,
                pipes: [SummaryPipe],
    directives: [CoursesComponent, FavoriteComponent, LikeComponent, VoteComponent]
})
export class AppComponent {
    viewMode = 'map';
    courses = [];
    myCourses = ['NodeJS', 'TypeScript', 'AngularJS'];
    title = "My Angular App";
    imgUrl = "http://lorempixel.com/400/200/";
    isActive = false;
   // @Input() isFavorite = false; //make isFavorite available to consumer by calling input decorator

    onClick($event){
        $event.stopPropagation();//div event will not be called
        console.log('Event', $event);
    }

    onDivClick(){
        console.log('Event Handled by div');
    }

    post = {
        isFavorite: true
    }

    myPost = {
        title: 'POST',
        body: 'hjwhedhwheiwijeoewieuiwueiuwiu3eiu3wie4ihw. ieuiuoeoiwoieo2iwpoe2po3w-23wo2qp3wo2qio3woq23wo2i3wo2ueouoe2'
    }

    tweet = {
        totalLikes: 5,
        iLike: false
    }

    voter = {
        voteCount: 5,
        myVote: 0
    }

    onFavoriteChange($event){
        console.log('onFavoriteChange Event', $event);
    }

    onVote($event){
        console.log('onVote Event', $event);
    }

 }