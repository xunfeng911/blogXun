import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cs-my-skill',
  template: `
    <div class="skill"  cs-row>
    <cs-time-line [csSpan]="windowWidth >= 960 ? 20 : 24" [csOffset]="windowWidth >= 960 ? 2 : 0" cs-col>
      <cs-time-line-item *ngFor="let itm of skillData; index as i" [xDate]="itm.xdate">
        <cs-resume-pro-card [cardData]="itm"></cs-resume-pro-card>
      </cs-time-line-item>
    </cs-time-line>
  </div>
  `,
  styles: [`
    .skill {
      padding-top: 24px;
      padding-left: 100px;
    }

    @media screen and (max-width: 960px) {
      .skill {
        padding-left: 0;
      }
    }
  `]
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
