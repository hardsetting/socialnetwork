import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Overlay} from "angular2-modal";
import {Modal} from "angular2-modal/plugins/vex";

@Component({
    moduleId: module.id,
    selector: 'sn-app',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(overlay: Overlay, vcRef: ViewContainerRef) {
        overlay.defaultViewContainer = vcRef;
    }
}