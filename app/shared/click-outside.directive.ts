import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    // Dunno why should @Output be commented out..
    /*@Output() */public clickOutside = new EventEmitter();

    constructor(private elementRef : ElementRef) { }

    @HostListener('document:click', ['$event.target'])
    private onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(targetElement);
        }
    }
}