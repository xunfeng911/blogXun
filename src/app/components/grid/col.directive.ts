import {
  Directive
} from '@angular/core';
import { ColComponent } from './col.component';

@Directive({
  selector: '[cs-col]'
})
export class ColDirective extends ColComponent {
}
