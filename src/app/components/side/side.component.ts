import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userInfo } from '../../../api/api';

@Component({
  selector: 'cs-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {
  usrData: any;
  windowHeight: number;
  constructor( private router: Router ) {
    this.windowHeight = window.innerHeight;
    this.usrData = userInfo;
  }
  goRoute() {
    this.router.navigate(['/blog']);
  }
}
