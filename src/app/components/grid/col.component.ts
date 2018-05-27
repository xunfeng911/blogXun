import {
  Component,
  ElementRef,
  Host,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Renderer2,
  SimpleChange,
} from '@angular/core';
import { RowComponent } from './row.component';

export abstract class EmbeddedProperty {
  span: number;
  pull: number;
  push: number;
  offset: number;
  order: number;
}

@Component({
  selector: 'cs-col',
  template: `
    <ng-content></ng-content>
  `,
  styles  : []
})
export class ColComponent implements OnInit, OnChanges {
  _classList: string[] = [];
  _el: HTMLElement;
  _prefixCls = 'cs-col';

  @HostBinding('style.padding-left.px')
  get paddingLeft(): number {
    return this._csRow && this._csRow._gutter / 2;
  }

  @HostBinding('style.padding-right.px')
  get paddingRight(): number {
    return this._csRow && this._csRow._gutter / 2;
  }

  @Input() csSpan: number;
  @Input() csOrder: number;
  @Input() csOffset: number;
  @Input() csPush: number;
  @Input() csPull: number;
  @Input() csXs: number | EmbeddedProperty;
  @Input() csSm: number | EmbeddedProperty;
  @Input() csMd: number | EmbeddedProperty;
  @Input() csLg: number | EmbeddedProperty;
  @Input() csXl: number | EmbeddedProperty;

  setClassMap(): void {
    this._classList.forEach(_className => {
      this._renderer.removeClass(this._el, _className);
    });
    this._classList = [
      isNotNil(this.csSpan) && `${this._prefixCls}-${this.csSpan}`,
      isNotNil(this.csOrder) && `${this._prefixCls}-order-${this.csOrder}`,
      isNotNil(this.csOffset) && `${this._prefixCls}-offset-${this.csOffset}`,
      isNotNil(this.csPull) && `${this._prefixCls}-pull-${this.csPull}`,
      isNotNil(this.csPush) && `${this._prefixCls}-push-${this.csPush}`,
      ...this.generateClass()
    ];
    this._classList = this._classList.filter((item) => {
      return !!item;
    });
    this._classList.forEach(_className => {
      this._renderer.addClass(this._el, _className);
    });
  }

  generateClass(): string[] {
    const listOfSizeInputName = [ 'csXs', 'csSm', 'csMd', 'csLg', 'csXl' ];
    const listOfClassName: string[] = [];
    listOfSizeInputName.forEach(name => {
      const sizeName = name.replace('cs', '').toLowerCase();
      if (isNotNil(this[ name ])) {
        if ((typeof(this[ name ]) === 'number') || (typeof (this[ name ]) === 'string')) {
          listOfClassName.push(`${this._prefixCls}-${sizeName}-${this[ name ]}`);
        } else {
          listOfClassName.push(this[ name ] && isNotNil(this[ name ].span) && `${this._prefixCls}-${sizeName}-${this[ name ].span}`);
          listOfClassName.push(this[ name ] && isNotNil(this[ name ].pull) && `${this._prefixCls}-${sizeName}-pull-${this[ name ].pull}`);
          listOfClassName.push(this[ name ] && isNotNil(this[ name ].push) && `${this._prefixCls}-${sizeName}-push-${this[ name ].push}`);
          // tslint:disable-next-line:max-line-length
          listOfClassName.push(this[ name ] && isNotNil(this[ name ].offset) && `${this._prefixCls}-${sizeName}-offset-${this[ name ].offset}`);
          // tslint:disable-next-line:max-line-length
          listOfClassName.push(this[ name ] && isNotNil(this[ name ].order) && `${this._prefixCls}-${sizeName}-order-${this[ name ].order}`);
        }
      }

    });
    return listOfClassName;
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    this.setClassMap();
  }

  constructor(private _elementRef: ElementRef, @Optional() @Host() public _csRow: RowComponent, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.setClassMap();
  }
}


function isNotNil(value: undefined | null | string | number | boolean): boolean {
  return (typeof(value) !== 'undefined') && value !== null;
}
