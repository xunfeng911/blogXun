import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cs-my-skill',
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.scss']
})
export class MySkillComponent implements OnInit {
  @Input() skillData;
  windowWidth: number;
  constructor() {
    this.windowWidth = window.screen.width;
    }

  ngOnInit() {
  }

}
