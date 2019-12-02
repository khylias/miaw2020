import { Directive, ElementRef, Renderer2, OnInit, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appMarkSelect]'
})
export class MarkSelectDirective implements OnInit, OnChanges {
  @Input() appMarkSelect: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.appMarkSelect) {
      this.show();
    } else {
      this.hide();
    }
  }

  private show(): void {
    const span = this.renderer.createElement('span');
    span.textContent = 'Sélectionné !';

    this.renderer.appendChild(this.renderer.parentNode(this.el.nativeElement), span);
  }

  private hide() {
    if (this.renderer.nextSibling(this.el.nativeElement)) {
      this.renderer.removeChild(this.renderer.parentNode(this.el.nativeElement), this.renderer.nextSibling(this.el.nativeElement));
    }
  }
}
