import {Input} from 'angular2/core';

export class ZippyComponent{
    isExpanded = false;
    @Input() title: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}