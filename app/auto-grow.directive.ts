import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
   selector: '[autoGrow]',
   host: {
       '(focus)' : 'onFocus()',
       '(blur)' : 'onBlur()'
   }
})

export class AutoGrowDirective{
    //_el: ElementRef; //use _ to indicate private field

    constructor(private el: ElementRef, private renderer: Renderer){
        
    }

    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '100');
    }
}