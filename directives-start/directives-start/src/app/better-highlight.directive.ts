import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

   
  }

      @HostListener('mouseover') onMouseOver() {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    }

      @HostListener('mouseleave') onMouseLeave() {
         this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

    }

    @HostListener('click') onClick() {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    }

}
