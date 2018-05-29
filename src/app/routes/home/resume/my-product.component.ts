import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'cs-my-product',
    template: `
    <div class="product"  cs-row>
        <cs-time-line id="side" [csSpan]="windowWidth >= 960 ? 20 : 24" [csOffset]="windowWidth >= 960 ? 2 : 0" cs-col>
            <cs-time-line-item *ngFor="let itm of proData; index as i" [xDate]="itm.xdate">
                <cs-resume-pro-card [cardData]="itm"></cs-resume-pro-card>
            </cs-time-line-item>
        </cs-time-line>
    </div>`,
    styles: [`
    .product {
        padding-top: 24px;
        padding-left: 100px;
    }
    @media screen and (max-width: 960px) {
        .product {
            padding-left: 0;
        }
    }
    `]
})
export class MyProductComponent implements OnInit {
    @Input() proData;
    windowWidth: number;
    constructor() {
        this.windowWidth = window.screen.width;
    }
    ngOnInit() {
    }

}
