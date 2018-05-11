import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'cs-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss'],
})
export class MyInfoComponent implements OnInit {
  @Input() infoData;

  constructor() { }

  ngOnInit() {
  }

}
