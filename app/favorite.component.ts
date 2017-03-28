import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    //selector: 'favorite',
    //two-way binding
    //class binding. <button class="btn btn-primary" [class.active] = "isActive">Hi!</button>
    //style binding. If button is active, color is blue, else yellow
    //event binding. Use () when calling a method.
    templateUrl: 'app/favorite.template.html',
    styles: [`
                .glyphicon-star{
                    color: orange;
                }
            `], //inline css styling
    //styleUrls: [], //causes extra http requests
    inputs: ['isFavorite: is-favorite'] //with this, no need for input decorator @Input.
})

export class FavoriteComponent {
    
    isActive = false;
    @Input('is-favorite') isFavorite = false; //make isFavorite available to consumer by calling input decorator. itbecomes input property
    @Output() change = new EventEmitter(); //event that must be called when favorite icon is clicked
    //@Output('favoriteChange') change = new EventEmitter();

    onStarClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({newVal: this.isFavorite});
    }
 }