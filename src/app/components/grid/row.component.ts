import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

export type csJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
export type csAlign = 'top' | 'middle' | 'bottom';
export type csType = 'flex' | null;

@Component({
  selector     : '[cs-row], cs-row',
  encapsulation: ViewEncapsulation.None,
  template     : `
    <ng-content></ng-content>
  `,
  styleUrls    : [
    './styles/index.scss'
  ]
})
export class RowComponent implements OnInit {
  _classList: string[] = [];
  _el: HTMLElement;
  _prefixCls = 'cs-row';
  _gutter: number;
  _type: csType;
  _align: csAlign = 'top';
  _justify: csJustify = 'start';

  @Input()
  set csType(value: csType) {
    this._type = value;
    this.setClassMap();
  }

  get csType(): csType {
    return this._type;
  }

  @Input()
  set csAlign(value: csAlign) {
    this._align = value;
    this.setClassMap();
  }

  get csAlign(): csAlign {
    return this._align;
  }

  @Input()
  set csJustify(value: csJustify) {
    this._justify = value;
    this.setClassMap();
  }

  get csJustify(): csJustify {
    return this._justify;
  }

  @Input()
  get csGutter(): number {
    return this._gutter;
  }

  set csGutter(value: number) {
    this._gutter = value;
    this.setStyle();
  }

  setStyle(): void {
    this._renderer.setStyle(this._el, 'margin-left', `-${this._gutter / 2}px`);
    this._renderer.setStyle(this._el, 'margin-right', `-${this._gutter / 2}px`);
  }

  setClassMap(): void {
    this._classList.forEach(_className => {
      this._renderer.removeClass(this._el, _className);
    });
    this._classList = [
      (!this.csType) && this._prefixCls,
      this.csType && `${this._prefixCls}-${this.csType}`,
      this.csType && this.csAlign && `${this._prefixCls}-${this.csType}-${this.csAlign}`,
      this.csType && this.csJustify && `${this._prefixCls}-${this.csType}-${this.csJustify}`
    ].filter((item) => {
      return !!item;
    });
    this._classList.forEach(_className => {
      this._renderer.addClass(this._el, _className);
    });
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.setClassMap();
  }
}
