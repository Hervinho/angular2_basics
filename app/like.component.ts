import {Component, Input} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
        <i class="glyphicon glyphicon-heart"
                    [class.highlighted] = "iLike" 
                    (click) = "onLikeClick()"></i>
        <span> {{totalLikes}} </span>
    `,
    styles: [`
                .glyphicon-heart{
                    color: #ccc;
                    cursor: pointer;
                }
                .highlighted{
                    color: deeppink;
                }
            `], //inline css styling

})

export class LikeComponent {
    
    @Input() iLike = false; 
    @Input() totalLikes = 0;

    onLikeClick(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }
 }