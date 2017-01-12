import { Component, Input, ElementRef, Renderer, OnChanges, ViewChild } from '@angular/core';
declare let Dygraph: any;

@Component({
    selector: 'ng-dygraphs',
    templateUrl: 'ng-dygraphs.component.html',
    styleUrls: ['ng-dygraphs.component.css']
})
/**
 * Wrapper arround Dygraphs
 * 
 * @class NgDygraphsComponent
 */
export class NgDygraphsComponent implements OnChanges {
    @Input() chartWidth: number = 640;
    @Input() chartHeight: number = 480;
    @Input() data: any;
    @Input() lineNames: string[];
    @Input() xlabel: string;
    @Input() ylabel: string;
    @Input() axes: any;
    @Input() legend: string = 'always';
    @Input() pointSize: number;
    @Input() customVisibility: boolean = false;
    @ViewChild('chart') chart: ElementRef;
    g: any;
    lodingInProgress: boolean = true;
    constructor(private renderer: Renderer) {
    }
    /**
     * ngOnChanges
     * @method ngOnChanges
     * @return {void}
     */
    ngOnChanges() {
        if (this.data === undefined || this.data.length === 0) {return; };
        this.lodingInProgress = true;
        let initialVisibility: any[] = [];
        this.lineNames.forEach(a => {
            initialVisibility.push(true);
        });
        setTimeout(() => {
            this.g = new Dygraph(this.chart.nativeElement,
                this.data,
                {
                    labels: [this.xlabel].concat(this.lineNames),
                    ylabel: this.ylabel,
                    xlabel: this.xlabel,
                    legend: this.legend,
                    visibility: initialVisibility,
                    axes: this.axes,
                    pointSize: this.pointSize
                }
            );
            this.lodingInProgress = false;
            console.log(this.lodingInProgress);
        }, 500);
    }

    changeVisibility(el: any) {
        let elem = el.currentTarget;
        this.g.setVisibility(parseInt(elem.id), elem.checked);
    }
}
