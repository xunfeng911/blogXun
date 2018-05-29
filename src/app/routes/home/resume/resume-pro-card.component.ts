import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'cs-resume-pro-card',
    template: `
    <div class="resume-card-itm">
      <div class="resume-card-itm-tit">{{cardData.exp_name}}</div>
      <ol>
        <li class="resume-card-itm-li" *ngFor="let li of cardData.list ; index as i" [innerHTML]="li"></li>
      </ol>
    </div>
  `,
    styles: [`
    .resume-card-itm {
      padding: 12px 12px;
      background-color: rgba(233, 166, 108, .2);
    }
    .resume-card-itm-tit {
      border-bottom: 1px dashed #e9a66c;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
    .resume-card-itm-li {
      padding: 3px 0;
      padding-left: 6px;
    }
    @media screen and (max-width: 960px) {
      .resume-card-itm {
        padding: 6px;
        font-size: 14px;
      }
      .resume-card-itm-tit {
        font-size: 16px;
      }
      .resume-card-itm-li {
        padding-left: 0;
      }
    }
  `]
})
export class ResumeProCardComponent {
    @Input() cardData: any;
}
