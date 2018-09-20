import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

@Input () defaultcolor: string = 'transparent';
@Input () hlColor: string;
@HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

   this.backgroundColor = this.defaultcolor;
   
  }

      @HostListener('mouseover') onMouseOver() {
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
        this.backgroundColor = this.hlColor;
    }

      @HostListener('mouseleave') onMouseLeave() {
         //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
         this.backgroundColor = this.defaultcolor;

    }

    @HostListener('click') onClick() {
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
        this.backgroundColor = 'green';
    }

}
