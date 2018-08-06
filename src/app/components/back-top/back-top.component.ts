import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    TemplateRef
} from '@angular/core';
import {
    animate,
    style,
    transition,
    trigger
} from '@angular/animations';
import { fromEvent, Subscription } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';


@Component({
    selector: 'cs-back-top',
    animations         : [
        trigger('enterLeave', [
          transition(':enter', [
            style({ opacity: 0 }),
            animate(300, style({ opacity: 1 }))
          ]),
          transition(':leave', [
            style({ opacity: 1 }),
            animate(300, style({ opacity: 0 }))
          ])
        ])
      ],
    changeDetection    : ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    templateUrl: './back-top.component.html',
    styleUrls: ['./back-top.component.scss']
})
export class BackTopComponent implements OnInit {
  visible: boolean;
    constructor() {
      this.visible = false;
    }

    ngOnInit() {
    }

}
