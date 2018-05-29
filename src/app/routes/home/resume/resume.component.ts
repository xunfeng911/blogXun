import { Component, OnInit } from '@angular/core';
import { ResumeInfo } from '../../../../api/api';
export interface Resume {
    info: object;
    experience: Array<object>;
    product: Array<object>;
}

@Component({
    selector: 'cs-resume',
    // templateUrl: './resume.component.html',
    template: `
    <ul class="resume">
      <li class="resume-li">
        <p>个人信息</p>
        <cs-my-info [infoData]="ResumeData.info" ></cs-my-info>
      </li>
      <li class="resume-li" >
        <p>个人项目</p>
        <cs-my-skill [skillData]="ResumeData.experience"></cs-my-skill>
      </li>
      <li class="resume-li">
        <p>实习经历</p>
        <cs-my-product [proData]="ResumeData.product"></cs-my-product>
      </li>
    </ul>
    `,
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

    ResumeData: Resume;
    constructor() {
        this.ResumeData = {
            info: {},
            experience: [],
            product: []
        };
    }
    ngOnInit() {
        setTimeout(() => {
            this.ResumeData = ResumeInfo;
        }, 0);
    }
}
