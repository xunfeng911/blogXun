import { Component, Input } from '@angular/core';
@Component({
    selector: 'cs-my-info',
    template: `
        <ul class="info-tit">
            <li csVisualIn *ngFor="let item of infoData.list ; index as i"><span class="info-num">{{i+1}}.</span>{{item}}</li>
        </ul>`,
    styles: [`
        .info-tit {
            padding-left: 2rem;
            list-style: none;
            > li {
                padding: .2rem .5rem;
                font-size: 16px;
            }
        }
        .info-num {
            font-size: 24px;
        }
        @media screen and (max-width: 960px) {
            .info-tit {
                padding-left: 0;
                > li {
                    padding: .2rem .2rem;
                    font-size: 14px;
                }
            }
            .info-num {
                font-size: 20px;
            }
        }
    `],
})
export class MyInfoComponent {
    @Input() infoData;
    constructor() { }
}
