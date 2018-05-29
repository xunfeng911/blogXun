import { Directive, ElementRef, HostListener, HostBinding, OnInit } from '@angular/core';
import { _sanitizeHtml } from '@angular/core/src/sanitization/html_sanitizer';

@Directive({
    selector: '[csVisualIn]'
})
export class VisualInDirective implements OnInit {
    finished: boolean;
    constructor(
        private el: ElementRef,
    ) {
        this.finished = false;
    }
    @HostBinding('class.noShow') noShow = true;
    @HostBinding('class.bounceInRight') isAnimate: boolean;
    @HostListener('window:scroll') elementShowIn() {
        this.showAnimate().then(res => {
            if (res === 'show') {
                this.noShow = false;
                this.isAnimate = true;
                this.finished = true;
            }
        });
    }
    // @HostListener('window:load') elementLoadIn() {
    //   this.showAnimate().then(res => {
    //     if (res === 'show') {
    //       this.noShow = false;
    //       this.isAnimate = true;
    //       this.finished = true;
    //     }
    //   });
    // }
    // @HostListener('window:pageshow') pageShowIn() {
    //   console.log('pageshow');
    //   this.showAnimate().then(res => {
    //     if (res === 'show') {
    //       this.noShow = false;
    //       this.isAnimate = true;
    //       this.finished = true;
    //     }
    //   });
    // }
    ngOnInit(): void {
        this.showAnimate().then(res => {
            if (res === 'show') {
                this.noShow = false;
                this.isAnimate = true;
                this.finished = true;
            }
        });
    }
    private getOffsetBodyTop(ela) {
        let offsetBodyTop = 0;
        function _getOffsetBodyTop(el) {
            offsetBodyTop += el.offsetTop;
            if (el.offsetParent.tagName != 'BODY') {
                return _getOffsetBodyTop(el.offsetParent);
            } else if (el.offsetParent.tagName == 'BODY') {
                return false;
            }
        }
        _getOffsetBodyTop(ela);
        return offsetBodyTop;
    }

    private showAnimate(): Promise<any> {
        return new Promise((resolve, reject) => {
            const offsetBodyTop = this.getOffsetBodyTop(this.el.nativeElement); // 元素距离顶部高度
            const _dst = document.body.scrollTop || document.documentElement.scrollTop;   // 滚动高度
            const _wsh = window.innerHeight;  // 屏幕高度
            if (offsetBodyTop - _dst - _wsh < -30) {
                if (this.finished) {
                    resolve('isFinished');
                } else {
                    resolve('show');
                }
            } else {
                resolve('noShow');
            }
        });
    }
}
