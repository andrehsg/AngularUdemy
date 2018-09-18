import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector:'[basicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
    constructor(private elr:ElementRef){

    }

    ngOnInit () {
        this.elr.nativeElement.style.backgroundColor='red';
    }
}