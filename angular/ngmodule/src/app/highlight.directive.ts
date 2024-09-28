import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true  // Standalone directive
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string = 'yellow';  // Input property for setting highlight color

  constructor(private el: ElementRef, private renderer: Renderer2) {}

//   Mouse enters: Change background color
  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.highlightColor || 'yellow');
  }

//   Mouse leaves: Reset background color
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor(null);
  }

  private changeBackgroundColor(color: string | null) {
    // this.el.nativeElement.style.backgroundColor   = 'blue';

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
