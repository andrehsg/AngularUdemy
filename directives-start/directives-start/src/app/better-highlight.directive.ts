import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
@Input () defaultColor: string = 'transparent';
@Input () hlColor: string = 'blue';
@HostBinding('style.backgroundColor') bgColor: string; 
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

      this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') myMouseOver(eventData: Event){ 
  	this.bgColor = this.hlColor;
  }

    @HostListener('mouseleave') myMouseLeave(eventData: Event){ 
  	this.bgColor = this.defaultColor;

  }

}
