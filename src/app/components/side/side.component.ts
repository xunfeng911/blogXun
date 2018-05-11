import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../../services/get-usr-info.service';

@Component({
  selector: 'cs-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  usrData: any;
  windowHeight: number;
  constructor(
    private getInfo: GetInfoService) {
    this.usrData = {};
    this.windowHeight = window.innerHeight;
  }

  ngOnInit() {
    this._initData();
  }
  private _initData = (): void => {
    this.getInfo.getUsrInfo().subscribe(data => this.usrData = data);
  }
}
