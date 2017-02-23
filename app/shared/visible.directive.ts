import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[visible]'
})
export class VisibleDirective {
    @Output() public visible = new EventEmitter();

    private wasVisible: boolean;

    constructor(
        private elementRef: ElementRef
    ) {
        this.wasVisible = this.isVisible();
    }

    @HostListener('document:scroll')
    private onScroll() {
        let isVisible = this.isVisible();
        if (!this.wasVisible && isVisible) {
            this.visible.emit();
        }

        this.wasVisible = isVisible;
    }

    private isVisible(threshold?, mode?)
    {
        threshold = threshold || 0;
        mode = mode || 'visible'; // above|below|visible

        let rect = this.elementRef.nativeElement.getBoundingClientRect();
        let viewHeight = window.innerHeight;
        let above = rect.bottom - threshold < 0;
        let below = rect.top - viewHeight + threshold >= 0;

        return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
    }
}