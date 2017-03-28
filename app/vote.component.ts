import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'vote',
    templateUrl: 'app/vote.template.html',
    styles: [`
                .voter{
                    color: #999;
                    text-align: center;
                    width: 20px;
                }
                .vote-count{
                    font-size: 1.3em;
                }
                .vote-button{
                    cursor: pointer;
                }
                .highlited{
                    font-weight: bold;
                    color: orange;
                }
            `]
})

export class VoteComponent {
    
    @Input() voteCount = 0;
    @Input() myVote = 0; 
    @Output() vote = new EventEmitter();

    upVote(){
        if(this.myVote == 1){
            return;
        }
        this.myVote++;
        this.vote.emit({myVote: this.myVote});
    }

    downVote(){
        if(this.myVote == -1){
            return;
        }
        this.myVote--;
        this.vote.emit({myVote: this.myVote});
    }
 }